
import {
    FetchCallback,
    GetCallback,
    OptionId,
    OptionProp,
    OptionValue,
} from 'selectic';

export function sleep(time: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

export function getDynId(id: string | number): number {
    const [prefix, val] = id.toString().split('-');

    if (prefix !== 'dyn') {
        return -1;
    }
    return +val;
}

type Result = { total: number, result: OptionValue[]};

export const nbItemPerDynGroup = 20;
export function buildFetchCallback(optionVal: number, delay = 0): FetchCallback {
    let val = Math.abs(optionVal);
    if (optionVal < 0) {
        val *= nbItemPerDynGroup;
    }

    const callback =  async function(search: string, offset: number, pageSize: number): Promise<Result> {
        // simulate a backend computation
        let total = val;
        const result: OptionValue[] = [];
        let sample: OptionValue[] | null = null;

        if (search) {
            sample = [];
            // eslint-disable-next-line no-useless-escape
            const rgx = new RegExp(search.replace(/([-+\[\]\(\){}?^$.])/g, '\$1').replace(/[*]/g, '.*'), 'i');
            for (let idx = offset; idx < val; idx++) {
                const text = `Dynamic option: ${idx}`;
                if (rgx.test(text)) {
                    const item: OptionProp = {
                        id: `dyn-${idx}`,
                        text: text,
                    };
                    if (optionVal < 0) {
                        item.group = `group${Math.floor(idx / nbItemPerDynGroup)}`;
                    }
                    sample.push(item);
                }
            }
            total = sample.length;
        }

        if (offset < total) {
            for (let idx = offset; idx < total && idx < offset + pageSize; idx++) {
                if (search && sample) {
                    result.push(sample[idx - offset]);
                } else {
                    const text = `Dynamic option: ${idx}`;
                    const item: OptionProp = {
                        id: `dyn-${idx}`,
                        text: text,
                    };
                    if (optionVal < 0) {
                        item.group = `group${Math.floor(idx / nbItemPerDynGroup)}`;
                    }
                    result.push(item);
                }
            }
        }

        if (delay) {
            await sleep(delay);
        }
        return {
            total: total,
            result: result,
        };
    };

    return callback;
}

export function buildGetItemsCallback(optionVal: number, delay = 0): GetCallback {
    const val = Math.abs(optionVal);
    return async function(ids: OptionId[]) {
        const result = ids.reduce((rslt, id) => {
            if (!id) {
                return rslt;
            }
            const dynId = getDynId(id);
            if (dynId >= 0 && dynId < val) {
                rslt.push({
                    id: id,
                    text: `Dynamic option: ${id}`,
                });
            }
            return rslt;
        }, [] as OptionValue[]);

        if (delay) {
            await sleep(delay);
        }

        return result;
    };
}
