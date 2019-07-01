import Vuex from 'vuex';
import { Commit } from 'vuex';
import { State } from '@/store/interface';
import { get, post } from '@/api/index';

interface GetTodayWeatherParam {
    city: string;
}
const state: State = {
    count: 0,
    test1: [],
    message1: 'ss',
};
const getters = {
    // tslint:disable-next-line:no-shadowed-variable
    count: (state: State) => state.count,
    // tslint:disable-next-line:no-shadowed-variable
    message: (state: State) => state.message1,
};
const mutations = {
    // tslint:disable-next-line:no-shadowed-variable
    INCREMENT(state: State, num: number) {
        state.count += num;
    },
};
const actions = {
    async getTodayWeather(context: { commit: Commit }, cate: string) {
        const res: any = await get( cate )
            .then((response: any) => response ).catch((errs: any) => {
                // tslint:disable-next-line:no-console
                console.error(errs);
            });
        return res;
    },
    async postList(content: {commit: Commit}, params: any) { // params: GetTodayWeatherParam
        const res: any = await await post( params ).then((response: any) => {
            return response;
        }).catch((err: any) => {
            return err;
        });
        return res;
    },
};
export default {
    state,
    getters,
    mutations,
    actions,
};