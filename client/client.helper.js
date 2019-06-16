function getQueryParam(key) {
    let rawQueryParams = window.location.search
    let queryParams = new URLSearchParams(rawQueryParams)
    let query = queryParams.get(key)
    return query
}

function toast_error(err) {
    let msg = err.response && err.response.data || 'unknown error: ' + err.message
    $.toast({
        title: 'An error occured!',
        content: msg,
        type: 'error',
        delay: 2666
    })
}

function toast_success(title='success', msg) {
    $.toast({
        title: title,
        content: msg,
        type: 'success',
        delay: 2666
    })
}