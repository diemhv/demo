
// Util services
export const UtilService = {
    handleResponse,
    handleError,
    get
}

// Method Http GET 
function get(urlParam) {
    const setRequestOptions = {
        method: 'GET'
    }
    return fetch('https://api.github.com/users/' + urlParam, setRequestOptions).then(
        handleResponse,
        handleError
    );
}

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") === 0) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.status().then(status => reject(status));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}

export default UtilService 