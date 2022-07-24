import "./App.css";

function Pattern(){
        const number = 105
        const title = 'South facing outdoors'
        const larger_patterns = [{num: 104, title: 'Site repair', relation: 'within the general ideas of location which 104 Site Repair creates, this pattern governs the fundamental placing of the building and the open space around it with respect to sun'},]

        const essence = 'People use open space if it is sunny, and do not use it if it isn’t, in all but desert climates.'
        const body = `
            This is perhaps the most important single fact about a building.
            If the building is placed right, the building and its gardens
            will be happy places full of activity and laughter.
            If it is done wrong, then all the attention in the world,
            and the most beautiful details, will not prevent it from 
            being a silent gloomy place.
            Thousands of acres of open space in every city are wasted 
            because they are north of buildings and never get the sun.
            `
        const solution = `
            Always place buildings to the north of the outdoor spaces 
            that go with them, and keep the outdoor spaces to the south.
            Never leave a deep band of shade between the building 
            and the sunny part of the outdoors.
            `
        const smaller_patterns = [{num: 111, title: 'Half-hidden garden', relation: 'let it influence the position of the outdoors too'},
                {num: 106, title: 'Positive outdoor space', relation: 'make the outdoor spaces positive'},
                {num: 107, title: 'Wings of light', relation: 'break the building into narrow wings'},
                {num: 128, title: 'Indoor sunlight', relation: 'keep the most important rooms to the south'},
                {num: 162, title: 'North face', relation: 'keep storage, parking, etc, to the north'},
                {num: 161, title: 'Sunny place', relation: 'When the building is more developed, you can concentrate on the special sunny areas where the outdoors and building meet, and make definite places there, where people can sit in the sun'},]

    return (
        <div>
            <h1>{number} {title}</h1>
            <hr/>
            <ul style={{fontFamily: 'monospace'}}>
                    {larger_patterns.map(e => <li key={e.num}><a href=''><b>{e.num}</b> {e.title}</a>: {e.relation}</li>)}
            </ul>
            <hr/>
            <h2><center><b>{essence}</b></center></h2>
            <hr/>
            <div>{body}</div>
            <hr/>
            <h2><center><b>{solution}</b></center></h2>
            <hr/>
            <ul style={{fontFamily: 'monospace'}}>
                    {smaller_patterns.map(e => <li key={e.num}><a href=''><b>{e.num}</b> {e.title}</a>: {e.relation}</li>)}
            </ul>
        </div>
    )

}
function App() {
  return (
    <div style={{display:'flex'}}>
            <div style={{flex:'25%', borderRight: '3px solid blue'}}>
      <h3>
              The elements of this language are entities called patterns.
              Each pattern describes a problem which occurs over and over
              again in our environment, and then describes the core of 
              the solution to that problem, in such a way that you 
              can use this solution a million times over,
              without ever doing it the same way twice.
      </h3>
      <h3>
              each pattern has an introductory paragraph,
              which sets the context for the pattern,
              by explaining how it helps to complete certain larger patterns
      </h3>
      <h3>This headline gives the essence of the problem in one or two sentences.</h3>
      <h3>
              After the headline comes the body of the problem.
              This is the longest section. It describes the empirical background of the pattern,
              the evidence for its validity, the range of different ways 
              the pattern can be manifested in a building, and so on.
      </h3>
      <h3>
              Then is the solution—the heart of the pattern—which describes 
              the field of physical and social relationships which are required 
              to solve the stated problem, in the stated context. 
              This solution is always stated in the form of an instruction
              —so that you know exactly what you need to do, to build the pattern.
      </h3>
      <div>
              <h3>
                      And finally, after the diamonds there is a paragraph
                      which ties the pattern to all those smaller patterns
                      in the language, which are needed to complete this pattern,
                      to embellish it, to fill it out.
              </h3>
      </div>
      </div>
            <div style={{flex:'75%'}}>
                    <Pattern />
      </div>
    </div>
  );
}

export default App;
