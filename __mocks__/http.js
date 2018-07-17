const users = {
    4: {name: 'Mark'},
    5: {name: 'Paul'},
  };
  
module.exports.http = function() {
    return 'blah'
}

module.exports.get = function() {
    return {
        on: function() {
            return 'done'
        }
    }
}