import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords= ['spam', 'money']

export function forbiddenWordsMiddleWare({dispatch}){
    return function(next){
        return function(action){
            
            if(action.type === ADD_ARTICLE){

                const foundWord= forbiddenWords.filter((el)=>{
                    return action.payload.title.includes(el)
                })

                if(foundWord.length){
                    return dispatch({type: 'FOUND_BAD_WORDS'})
                }
            }

            return next(action)
        }
    }
}