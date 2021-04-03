const assert = require('assert');

describe('PREDICT SALES TEST', () => {
 it('Should predict correctly', () => {

        salesAmount = [100,200,400,250,500];
        let expextedOutput = 290;
        let actualOutput = 0;
        let sum = 0;
        for(let i of salesAmount) sum+=i;
        actualOutput = sum/5;

        assert.strictEqual(actualOutput,expextedOutput,"Predict sales failed!");
        
    });
 
});