import {Memo} from "../models/Memo";
// const baseUrl = 'http://localhost:3002';

const url = `${process.env.REACT_APP_SERVER_BASE_URL}/memo`;
// const url = `${baseUrl}/fail`;

function translateStateToErrorMessage(status: number){
    switch(status){
        case 401:
            return 'Please login again.';
        case 403:
            return 'You do not have permission to view the project(s).';
        default:
            return 'There was an error retrieving the project(s). Please try again.';
    }
};
function checkStatus(response: any){
    if(response.ok){
        return response;
    } else{
        const httpErrorInfo={
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        };
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);
        let errorMessage = translateStateToErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response){
    return response.json();
}

function delay(ms: number){
    return function (x: any): Promise<any>{
        return new Promise((resolve)=> setTimeout(()=> resolve(x), ms));
    }
}
function convertToMemoModels(data: any[]): Memo[] {
    let memos: Memo[] = data.map(convertToMemoModel)
    return memos;
}

function convertToMemoModel(item: any):Memo {
    return new Memo(item);
}

const memoAPI = {
    get(id = 1){
        return fetch(`${url}/${id}`)
        .then(delay(600))
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToMemoModel)
        .catch((error: TypeError)=>{
            console.log('log client error '+ error);
            throw new Error(
                'There was an error retrieving the projects.Please try again'
            )
        })
    },
    getList(page = 1, limit = 20){
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
        .then(delay(600))
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToMemoModels)
        .catch((error: TypeError)=>{
            console.log('log client error '+ error);
            throw new Error(
                'There was an error retrieving the projects.Please try again'
            )
        })
    },
    post(memo: Memo){
        return fetch(`${url}/register`,{
            method: 'POST',
            body: JSON.stringify(memo),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError)=>{
            console.log('log client error ' + error);
            throw new Error(
                'There was an error updating the project. Please try again.'
            )
        })
    },
    put(id: Number,memo: Memo){
        return fetch(`${url}/${id}/edit`,{
            method: 'PUT',
            body: JSON.stringify(memo),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError)=>{
            console.log('log client error ' + error);
            throw new Error(
                'There was an error updating the project. Please try again.'
            )
        })
    }
}

export {memoAPI}