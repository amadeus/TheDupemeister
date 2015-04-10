// jshint node:true
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
 *   Author:
 *   	- Amadeus Demarzi
 *
 */
(function(){

if (!process.argv[2])
	return console.log('You need to specify a file, n00b.');

var fs = require('fs'),
	TheDupemeister = function(err, codez){
		if (err) return console.log('Error reading file');

		// Start timing The Epic Dupemeister
		console.log('\n====================================\nThe Dupemeister Awakes From His Lair\n------------------------------------');
		console.time('\nThe Dupemeister Was Awake For');

		var testee,
			matchList = [],
			matchStore = {},
			cleanList = [],
			fn = function(toTest){
				if (testee === toTest) {
					matchList.push(toTest);
					matchStore[testee]++;
				}
			},
			total = 0,
			cleanFile;

		codez = codez.split(/\n/g);
		total = codez.length;

		// Determine dupes!
		while ((testee = codez.shift())) {
			if (!matchStore[testee]) matchStore[testee] = 0;
			codez.forEach(fn);
		}

		console.log('Number of dupes: %s in %s', matchList.length, total);

		if (matchList.length) {
			// Generate clean array and setup dupe stats
			for (var name in matchStore) {
				cleanList.push(name);
				if (matchStore[name] === 0) delete matchStore[name];
			}

			// Create clean file name if non specified
			if (process.argv[3]) cleanFile = process.argv[3];
			else {
				cleanFile = process.argv[2];
				cleanFile = cleanFile.split('.');
				cleanFile[0] += '-clean';
				cleanFile = cleanFile.join('.');
			}

			fs.writeFile(cleanFile, cleanList.join('\n'));
			console.log('Individual Dupe Stats: \n', matchStore);
			console.log('Clean CSV written to: %s', cleanFile);
		}
		else console.log('The Dupemeister is very angry that you disturbed him.');

		console.log('------------------------------------\nThe Dupemeister Returns To His Lair\n====================================');
		console.timeEnd('\nThe Dupemeister Was Awake For');
	};

fs.readFile(process.argv[2], 'utf8', TheDupemeister);

})();
