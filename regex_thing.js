var fs = require('fs')
function regex_func(astr)
{
    if(typeof(astr) != "string") //typecheck to make sure what is input is a string
    {
        throw "This is not a string.";
    }
    var re_at = /\w{2,}at\b/; //regex to look for 4 or more letter words that end with "at"
    const results = astr.split(" ").filter(astr => astr.match(re_at)).join(" "); //filters through the whole string to find words that match the regex
    return results;
}

console.log(regex_func("Hello my name is Wombat, and I'm in at a chat room"));

fs.readFile(__dirname+"/pride_and_predjudice.txt", "utf8", (err, data) => { //reads the given file an runs it through my function
    if (err) throw err;
    console.log(regex_func(data));
  });