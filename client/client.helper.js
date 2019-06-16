function getQueryParam(key) {
    let rawQueryParams = window.location.search
    let queryParams = new URLSearchParams(rawQueryParams)
    let query = queryParams.get(key)
    return query
}

function toast_error(msg) {
    $.toast({
        title: 'A error occured!',
        content: msg,
        type: 'error',
        delay: 2666
    })
}