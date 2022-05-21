function downloadFile() {
    let pathname = window.location.pathname.replace("index.html", "");
    let pathnames = pathname.split('/');
    let name = (pathname.endsWith("/") ? pathnames[pathnames.length - 2] : pathnames.pop()) + ".zip"
    let url = window.location.href.replace("index.html", "") + "dl.zip";
    fetch(url, {mode: "no-cors"})
    .then(response=>response.blob())
    .then(data=>{
        let elm = document.createElement('a')
        elm.href = URL.createObjectURL(data);
        elm.setAttribute('download', name);
        // elm.click();
    })

}