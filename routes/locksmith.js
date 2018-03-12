var locksmith = function(key, message) {
    var bc = require("base-conversion");
    var stb = require("string-to-binary");
    var bts = require("binary-to-string");
    var isBinary = require("validate.io-binary-string");
    var hexToBin = bc(16,2);

    function xOR(a,b){
        // console.log("adding",a,b)
        var combin = a+b;
        // console.log("combination "+combin)
        switch (combin) {
            case (0):
                return 0;
                break;
            case (2):
                return 0;
                break;
            case(1):
                return 1;
                break;
        }
    }


    //make the key the same length as the message
    function keyLong(key,msg){
        var tail_dist_from_last = msg.length % key.length;
        var tail_index_st = key.length - tail_dist_from_last;
        var tail = key.splice(tail_index_st,key.length);
        // console.log("the tail is this long: ",tail.length);
        var multiple = msg.length-tail_dist_from_last;
        multiple = multiple/key.length;
        // console.log("the key will fit "+ multiple + " times in the msg");
        var output = tail;
        for (n=0; n<multiple; n++){
            output=key+","+output;
        }
        output = output.split(",");
        // console.log("out put is array? ",Array.isArray(output));
        return output;

    }


    //encrypt the message
    var encrypt = function(key,msg){
        var output = "";
        for (n in msg){
            // console.log("or these ",key[n],msg[n])
            var el1 = parseInt(key[n]);
            var el2 = parseInt(msg[n]);
            var temp = xOR(el1,el2);
            output = output+temp;
        }
        output = output.toString();
        return output;
    }
    //decrypt the message
    var decrypt = function(key,msg){
        var output = "";
        for (n in msg){
            /*console.log("or these ",key[n],msg[n])*/
            var el1 = parseInt(key[n]);
            var el2 = parseInt(msg[n]);
            var temp = xOR(el1,el2);
            output = output+temp;
        }
        output = bts(output);
        return output;
    }

    //if the message is not already encrypted then convert it to binary from UTF8
    if (!isBinary(message)){
        var binary_message = stb(message);
        // console.log("binary message: "+binary_message);
        var binary_message = binary_message.split("");
        // console.log("bm to arr "+binary_message);
    } else /*else convert to an array*/{
        var binary_message = message.split("");
    }
    //turning the hex key to binary either way
    var binary_key = hexToBin(key);
    // console.log("binary key: "+binary_key)

    var binary_key = binary_key.split("");
    // console.log("bk to arr "+binary_key);
    //make the key the right length
    binary_key = keyLong(binary_key,binary_message);
    // console.log("now it has the right length : "+binary_key);

    //initializing the output variable
    var output;

    if (!isBinary(message)){
        output = encrypt(binary_key,binary_message);
    }else{
        output = decrypt(binary_key,binary_message)
    }

    return output;
}    

module.exports = locksmith;