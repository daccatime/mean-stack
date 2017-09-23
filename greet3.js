function greetr()
{
    this.greeting= 'hello w';
    this.greet = function(){
        console.log(this.greeting);

    };
}

module.exports = greetr();
