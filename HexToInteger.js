/**
 {
   "api": 1,
   "name": "Hex to Integer",
   "description": "Converts hexadecimal to integer.",
   "author": "Maurice",
   "icon": "metamorphose",
   "tags": "integer,hexadecimal,int,hex"
 }
 **/

function main(state) {
  var text = state.text;
  var lines = text.split(/\n/);
  var result = "";

  for (const index in lines) {
    var text = lines[index].trim();
    if (!text.startsWith("0x")) {
      text = "0x" + text;
    }
    var bigint = BigInt(text).toString(10);
    if (isNaN(bigint)) {
      result += text;
    } else {
      result += bigint;
    }

    result += "\n";
  }

  state.text = result.trim();
}
