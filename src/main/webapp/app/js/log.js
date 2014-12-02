function Log(prefix)
{
    Log.LEVEL_ALL = 255;

    Log.LEVEL_ERROR = 10;
    Log.LEVEL_WARN = 20;
    Log.LEVEL_INFO = 30;

    this.prefix = prefix;

    if (this.prefix == undefined) {
        this.prefix = "";
    }
    this.level = Log.LEVEL_ALL;

    this.error = function log(msg)
    {
        console.error(this.prefix + msg)
    }

    this.warn = function log(msg)
    {
        console.warn(this.prefix + msg)
    }

    this.info = function log(msg)
    {
        console.info(this.prefix + msg)
    }
}

var devLog = new Log("### DEV: ");
