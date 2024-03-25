export namespace main {
	
	export class PathContent {
	    name: string;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new PathContent(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.path = source["path"];
	    }
	}

}

