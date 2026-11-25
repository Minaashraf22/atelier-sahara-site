export const projects = [
  { id: 'dune', img: 'img/hero.jpg', name: 'Dune Courtyard Residence', type: 'Residential', place: 'Desert edge', year: 2025, text: 'Rammed-earth walls keep the house cool. Rooms open onto a shaded courtyard with a long pool.' },
  { id: 'lattice', img: 'img/tower.jpg', name: 'Lattice Tower', type: 'Commercial', place: 'Waterfront district', year: 2024, text: 'A facade of folded geometric screens cuts solar gain and gives each floor a different pattern of light.' },
  { id: 'arcade', img: 'img/museum.jpg', name: 'Arcade Museum of Craft', type: 'Cultural', place: 'Old town', year: 2024, text: 'Stone arches frame deep shadows and lead visitors from gallery to gallery.' },
  { id: 'noor', img: 'img/mosque.jpg', name: 'Noor Prayer Hall', type: 'Cultural', place: 'New suburb', year: 2023, text: 'Patterned screens filter daylight into a calm hall with no ornament beyond light itself.' },
  { id: 'palm', img: 'img/resort.jpg', name: 'Palm Terrace Resort', type: 'Hospitality', place: 'Red Sea coast', year: 2023, text: 'Curved white terraces step down to the sea so every room has a view and a breeze.' },
]
export const services = [
  ['Concept and masterplan', 'Site reading, climate study and a clear design idea before any drawing is polished.'],
  ['Architecture and interiors', 'Full design from sketch to construction drawings, with interiors designed together with the building.'],
  ['Facade and light', 'Screens, shading and daylight studies that lower cooling load and shape the mood of a space.'],
  ['Site supervision', 'We stay through construction so what is built matches what was drawn.'],
]
export const steps = [
  ['01', 'Listen', 'Brief, site visit and budget in plain numbers.'],
  ['02', 'Sketch', 'Three directions, one chosen together.'],
  ['03', 'Develop', 'Plans, models and materials fixed with the engineers.'],
  ['04', 'Build', 'Supervision and handover with a maintenance guide.'],
]
export const SECTIONS = ['work', 'services', 'process', 'contact']
export const TYPES = ['All', ...new Set(projects.map(p => p.type))]
