
		/**
		 * Error object constructor
		 * @param {String} error_no
		 */
		function jSQL_Error(error_no) {
			this.error = error_no;
			this.stack = undefined;
			var e = new Error();
			if(e.stack) this.stack = e.stack;
			switch(error_no){
				case "0001": this.message = "Corrupted function stored in data."; break;
				case "0002": this.message = "Attempted to apply a non-function as an error handler."; break;
				case "0003": this.message = "Invalid datatype definition."; break;
				case "0004": this.message = "DataType must have a `type` property."; break;
				case "0005": this.message = "DataType must have a `serialize` function."; break;
				case "0006": this.message = "DataType must have an `unserialize` function."; break;
				case "0007": this.message = "Unsupported data type."; break;
				case "0008": this.message = "Invalid table types array."; break;
				case "0009": this.message = "Unable to convert columns to array."; break;
				case "0010": this.message = "Invalid constraint."; break;
				case "0011": this.message = "This table already has a primary key."; break;
				case "0012": this.message = "renameColumn expects and old column name and a new one, both must be strings."; break;
				case "0013": this.message = "Column does not exist."; break;
				case "0014": this.message = "Data must be an array."; break;
				case "0015": this.message = "Data not structured properly."; break;
				case "0016": this.message = "Cannot insert a null value in a primary column."; break;
				case "0017": this.message = "Primary Key violated."; break;
				case "0018": this.message = "Cannot insert a null value in a unique column."; break;
				case "0019": this.message = "Unique key violated."; break;
				case "0020": this.message = "Data type's serialize() method did not return a string."; break;
				case "0021": this.message = "Table does not exist."; break;
				case "0022": this.message = "Method does not apply to query type."; break;
				case "0023": this.message = "Fetch expects paramter one to be 'ASSOC', 'ARRAY', or undefined."; break;
				case "0024": this.message = "Expected number or quoted string."; break;
				case "0025": this.message = "Expected 'ORDER BY'."; break;
				case "0026": this.message = "Must call ORDER BY before using ASC."; break;
				case "0027": this.message = "Must call ORDER BY before using DESC."; break;
				case "0028": this.message = "Unintelligible query. Expected 'FROM'."; break;
				case "0029": this.message = "Unintelligible query. Expected 'TABLE'."; break;
				case "0030": this.message = "Unintelligible query. Expected 'INTO'."; break;
				case "0031": this.message = "Unintelligible query. Expected 'VALUES'."; break;
				case "0032": this.message = "Unintelligible query. Too many values."; break;
				case "0033": this.message = "Unintelligible query. Columns mismatch."; break;
				case "0034": this.message = "Invalid Column definition."; break;
				case "0035": this.message = "Unintelligible query. Expected 'NOT'."; break;
				case "0036": this.message = "Unintelligible query. Expected 'EXISTS'."; break;
				case "0037": this.message = "Unintelligible query. expected ')'."; break;
				case "0038": this.message = "Invalid Arg definition."; break;
				case "0039": this.message = "Unintelligible query. Expected 'SET'."; break;
				case "0040": this.message = "Unintelligible query. Expected 'FROM'."; break;
				case "0041": this.message = "Unintelligible query. WTF?"; break;
				case "0042": this.message = "Must add a conditional before adding another 'Where' condition."; break;
				case "0043": this.message = "Column name must be a string."; break;
				case "0044": this.message = "Must add a 'where' clause before the 'equals' call."; break;
				case "0045": this.message = "Must add a 'where' clause before the 'preparedLike' call."; break;
				case "0046": this.message = "Must add a 'where' clause before the 'doesNotEqual' call."; break;
				case "0047": this.message = "Must add a 'where' clause before the 'lessThan' call."; break;
				case "0048": this.message = "Must add a 'where' clause before the 'greaterThan' call."; break;
				case "0049": this.message = "Must add a 'where' clause before the 'contains' call."; break;
				case "0050": this.message = "Must add a 'where' clause before the 'endsWith' call."; break;
				case "0051": this.message = "Must add a 'where' clause before the 'beginsWith' call."; break;
				case "0052": this.message = "Must use orderBy clause before using ASC."; break;
				case "0053": this.message = "Must use orderBy clause before using DESC."; break;
				case "0054": this.message = "Could not execute query."; break;
				case "0055": this.message = "Error creating table."; break;
				case "0056": this.message = "Error opening database."; break;
				case "0057": this.message = "indexedDB is not supported in this browser."; break;
				case "0058": this.message = "Could not add data after 10 seconds."; break;
				case "0059": this.message = "Error updating datastore version."; break;
				case "0060": this.message = "Could not connect to the indexedDB datastore."; break;
				case "0061": this.message = "Could not initiate a transaction."; break;
				case "0062": this.message = "Could not initiate a request."; break;
				case "0063": this.message = "Browser doesn't support Web SQL or IndexedDB."; break;
				case "0064": this.message = "Unable towrite to datastore file."; break;
				case "0065": this.message = "AUTO_INCREMENT column must be a key."; break;
				case "0066": this.message = "AUTO_INCREMENT column must be an INT type."; break;
				case "0067": this.message = "API is out of memory, cannot store more data."; break;
				case "0068": this.message = "Invalid ENUM value."; break;
				case "0069": this.message = "NUMERIC or INT type invalid or out of range."; break;
				default: this.message = "Unknown error."; break;
			}
			this.toString = function () {
				if(undefined === this.error) return "jSQL Error - "+this.message;
				return "jSQL Error #"+this.error+" - "+this.message;
			};
		}
		