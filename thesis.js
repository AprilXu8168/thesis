function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
window.onload = function() {
    // /**
    //  * 上传函数
    //  * @param fileInput DOM对象
    //  * @param callback 回调函数
    //  */
    // window.str1 = "aaa";
    // var getFileContent = function (fileInput, callback) {
    //     console.log("file input=" + fileInput + "   callback=" + callback);
    //     if (fileInput.files && fileInput.files.length > 0 && fileInput.files[0].size > 0) {
    //         //下面这一句相当于JQuery的：var file =$("#upload").prop('files')[0];
    //         var file = fileInput.files[0];
    //         if (window.FileReader) {
    //             var reader = new FileReader();
    //             reader.onloadend = function (evt) {
    //                 if (evt.target.readyState == FileReader.DONE) {
    //                     callback(evt.target.result);
    //                 }
    //                 //var result=evt.target.result;
    //                 //window.str1=evt.target.result;
    //             };
    //             // 包含中文内容用gbk编码
    //             reader.readAsText(file, 'gbk');
    //         }
    //     }
    //     console.log("result: \n" + str1);
    // };
    //
    // /**
    //  * upload内容变化时载入内容
    //  */

    document.getElementById('trusts').onchange = function () {
        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function (progressEvent) {
            var lines = this.result.split('\n');
            //for (var line = 0; line < lines.length; line++) {
            for (var line=0;line<10;line++){
                //console.log(lines[line]);
                var lin = lines[line].split(' ');
                console.log("user "+lin[0]+" trust user "+lin[1]);
            }
        };
        reader.readAsText(file);
        console.log("trusts");
    };
    document.getElementById('rates').onchange = function () {
        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function (progressEvent) {
            var lines = this.result.split('\n');
            //for (var line = 0; line < lines.length; line++) {
            for (var line=0;line<10;line++){
                //console.log(lines[line]);
                var lin = lines[line].split(' ');
                console.log("user "+lin[0]+" gave movie "+lin[1]+" "+lin[2]+" stars");
            }
        };
        reader.readAsText(file);
        console.log("rates");
    };
}