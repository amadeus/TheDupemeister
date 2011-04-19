/*
 *
 *   D&R (Death and Repudiation) License
 *   ===================================
 *
 *   This software may not be used directly by any living being. ANY use of this
 *   software (even perfectly legitimate and non-commercial uses) until after death
 *   is explicitly restricted. Any living being using (or attempting to use) this software
 *   will be punished to the fullest extent of the law.
 *
 *   For your protection, corpses will not be punished. We respectfully request
 *   that you submit your uses (revisions, uses, distributions, uses, etc.) to
 *   your children, who may vicariously perform these uses on your behalf. If
 *   you use this software and you are found to be not dead, you will be punished
 *   to the fullest extent of the law.
 *
 *   If you are found to be a ghost or angel, you will be punished to the fullest
 *   extent of the law.
 *
 *   After your following the terms of this license, the author has vowed to repudiate
 *   your claim, meaning that the validity of this contract will no longer be recognized.
 *   This license will be unexpectedly revoked (at a time which is designated to be
 *   most inconvenient) and involved heirs will be punished to the fullest extent
 *   of the law.
 *
 *   Furthermore, if any parties (related or non-related) escape the punishments
 *   outlined herein, they will be severely punished to the fullest extent of a new
 *   revised law that (1) expands the statement "fullest extent of the law" to encompass
 *   an infinite duration of infinite punishments and (2) exacts said punishments
 *   upon all parties (related or non-related).
 *
 *   Read more: http://forums.kffl.com/threads/270305-World-s-worst-software-license?s=e1b274fc725c251b267d9b4930268063#ixzz1JvMv0Xjt
 *   
 *   Author:
 *   	- Amadeus Demarzi
 *
*/

var codez = 'my stupid check for dupes code'.split(' '),
	testee,
	matches = [],
	fn = function(toTest){
		if (testee === toTest) matches.push(toTest);
	};

while (codez.length > 0) {
	testee = codez.shift();
	codez.forEach(fn);
}

console.log(matches);