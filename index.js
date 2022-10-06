const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  'Implementing Blockchain Web API',
  "The Test Driven Development Workflow",
  "What Is NaN and How Can We Check For It",
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
];

const titleCased = () => {
  return tutorials.map((globNames) => {
    const splitExpln = globNames.split(' ');
    return splitExpln.map((exp) => {
      return exp.charAt(0).toUpperCase() + exp.slice(1);
    }).join(' ');
  })
}
  

