import "./App.css";

const PATTERNS = {

    95: {title: 'Building complex'},
    104: {
            title: 'Site repair',
            essence: 'Buildings must always be built on those parts of the land which are in the worst condition, not the best.',
            body:   `
                    pending
                    `,
            solution:   `
                        On no account place buildings in the places which are most beautiful.
                        In fact, do the opposite.
                        Consider the site and its buildings as a single living eco-system.
                        Leave those areas that are the most precious, beautiful, comfortable,
                        and healthy as they are, and build new structures in those parts of the site which are least pleasant now.
                        `,
            larger_patterns: {
                    95: 'breaks buildings into smaller parts, and therefore makes it possible to tuck them into different corners of the site in the best places.',
            },

            smaller_patterns: {
                    171: 'Above all, leave trees intact and build around them with great care.',
                    105: 'keep open spaces open to the south of buildings, for the sun.',
                    106: 'try, generally, to shape space in such a way that each place becomes positive, in its own right.',
                    169: 'repair slopes if they need it with this.',
                    172: 'leave the outdoors in its natural state as much as possible.',
                    107: 'If necessary, push and shove the building into odd corners to preserve the beauty of an old vine, a bush you love, a patch of lovely grass.',
                    109: 'ídem 107',
                            },

    },
    105: {
            title: 'South facing outdoors',
            essence: 'People use open space if it is sunny, and do not use it if it isn’t, in all but desert climates.',
            body:   `
                    This is perhaps the most important single fact about a building.
                    If the building is placed right, the building and its gardens
                    will be happy places full of activity and laughter.
                    If it is done wrong, then all the attention in the world,
                    and the most beautiful details, will not prevent it from
                    being a silent gloomy place.
                    Thousands of acres of open space in every city are wasted
                    because they are north of buildings and never get the sun.
                    `,
            solution:   `
                        Always place buildings to the north of the outdoor spaces
                        that go with them, and keep the outdoor spaces to the south.
                        Never leave a deep band of shade between the building
                        and the sunny part of the outdoors.
                        `,
            larger_patterns: {
                    104: 'within the general ideas of location which 104 Site Repair creates, this pattern governs the fundamental placing of the building and the open space around it with respect to sun'
                            }
                            ,
            smaller_patterns: {
                    111: 'let it influence the position of the outdoors too',
                    106: 'make the outdoor spaces positive',
                    107: 'break the building into narrow wings',
                    128: 'keep the most important rooms to the south',
                    162: 'keep storage, parking, etc, to the north',
                    161: 'When the building is more developed, you can concentrate on the special sunny areas where the outdoors and building meet, and make definite places there, where people can sit in the sun',
                            },

    },
    106: {title: 'Positive outdoor space'},
    107: {title: 'Wings of light'},
    109: {title: 'Long thin house'},
    111: {title: 'Half-hidden garden'},
    128: {title: 'Indoor sunlight'},
    161: {title: 'Sunny place'},
    162: {title: 'North face'},
    169: {title: 'Terraced slope'},
    171: {title: 'Tree places'},
    172: {title: 'Garden growing wild'},
}


function Pattern({ pattern }){

    return (
        <div>
            <h2 style={{textAlign: 'center'}}><a href={pattern}>{pattern}</a></h2>
            <h1 style={{textAlign: 'center'}}>{PATTERNS[pattern].title}</h1>

            <hr/>
            {'essence' in PATTERNS[pattern] &&
            <h2 style={{textAlign: 'center'}}><i>{PATTERNS[pattern].essence}</i></h2>
                            || <span>nada</span>
            }
            <hr/>
            {'body' in PATTERNS[pattern] &&
            <div>{PATTERNS[pattern].body}</div> || <span>nada</span>
            }
            <hr/>
            {'solution' in PATTERNS[pattern] &&
            <h2 style={{textAlign: 'center'}}><i>{PATTERNS[pattern].solution}</i></h2>
                            || <span>nada</span>
            }
            <hr/>
        </div>
    )
}

function App() {

  const pattern = parseInt(window.location.pathname.slice(1)) || 104
  return (
    pattern in PATTERNS
    &&
    <div style={{display: 'flex'}}>

      <div style={{flex: 1, backgroundColor: 'DarkSeaGreen'}}>
        <h1 style={{textAlign: 'center'}}>Larger patterns</h1>
        <hr />
        {'larger_patterns' in PATTERNS[pattern] &&
          // <div style={{display:'flex'}}>
          Object.entries(PATTERNS[pattern].larger_patterns).map(
            ([k, v]) =>
              <div key={k} style={{flex:1, borderRight: '3px solid blue'}}>
                <Pattern pattern={k} />
                </div>
              )
        }
      </div>

      <div style={{flex: 1, backgroundColor: 'Turquoise'}}>
        <Pattern pattern={pattern} />
      </div>

      <div style={{flex: 1, backgroundColor: 'LightSeaGreen'}}>
        <h1 style={{textAlign: 'center'}}>Smaller patterns</h1>
        <hr />
        {'smaller_patterns' in PATTERNS[pattern] &&
        //display:'flex', flexDirection: 'row',
          Object.entries(PATTERNS[pattern].smaller_patterns).map(
            ([k, v]) =>
              <div key={k}><Pattern pattern={k} /></div>
          )
      }
      </div>
    </div>
    ||
    <span>pattern {pattern} not found</span>
  )
}

function Help() {
  return (
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
  )
}

export default App;
