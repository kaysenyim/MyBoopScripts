/**
 {
   "api": 1,
   "name": "Integer to Hex",
   "description": "Converts integer values to hexadecimal.",
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

    if (isNaN(text)) {
      result += text;
    } else {
      result += BigInt(text).toString(16);
    }

    result += "\n";
  }

  state.text = result.trim();
}
