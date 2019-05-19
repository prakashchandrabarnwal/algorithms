const power=(base, exponent) => {
	if(exponent === 0) return 1;
	if(exponent === 1) return base;
 
	return base * power(base, exponent - 1);
} 

console.log(power(2,33))

/**
 * 2^5
 *   2*2^4
 *      2*2^3
 */