var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd); 
		return arr; 
	},

	square: function (arr) {
		var array = arr.map(function(num){
			return num * num;
		});
		return array;
	},

	sum: function (arr) {
		var total = arr.reduce(function(sum, value){
			return sum + value;
		}, 0);
		return total;
	},



	findDuplicates: function (arr) {
		var duplicates = [];
		var hashMap = new Map; 
		for(var num of arr){
			if(hashMap.get(num) == null){
				hashMap.set(num, 1)
			} else {
				var value = hashMap.get(num);
				hashMap.set(num, value +1); 
			}
		}
		for (var [key, value] of hashMap) {
				if(value > 1){
					duplicates.push(key); 
				}
		}
		return duplicates;
	},


	removeAndClone: function (arr, valueToRemove) {
		var toRemove = []; 
		var refArray = arr;
		var i = 0;  
		for (var number of arr){
			if (number === valueToRemove){
				toRemove.push(i);
			}
			i++; 
		}

		var j = 0; 
		for(var index of toRemove){
			arr.splice(index - j, 1);
			j++; 
		}
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var toRemove = []; 
		var refArray = arr;
		var i = 0;  
		for (var number of arr){
			if (number === itemToFind){
				toRemove.push(i);
			}
			i++; 
		}
		return toRemove;

	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total =0; 
		arr.forEach(function(num){
			if(num % 2 < 1){
				total += (num * num);
			}
		});		
		return total;
	}
}

module.exports = arrayTasks
