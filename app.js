document.addEventListener('onload', getWords());

function getWords() {
	fetch(
		'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=80&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
	)
		.then(res => res.json())
		.then(json => addWords(json));
}

function addWords(json) {
	let wordArray = [
		',',
		',',
		';',
		';',
		':',
		'.',
		'.',
		'?',
		'!',
		'we',
		'a',
		'an',
		'I',
		'we',
		'if',
		'to',
		'my',
		'and',
		'or',
		'but',
		'yet',
		'she',
		'he',
		'they',
		'are',
		'is',
		'was',
		'had',
		'have',
		'give',
		'it',
		'of',
		'in',
		'by',
		'from',
		'as',
		'like',
		'with',
		'from'
	];

	json.forEach(w => {
		wordArray.push(w.word);
	});
	makeMagnets(wordArray);
}
