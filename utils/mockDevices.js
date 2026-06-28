const mockDevices = [
  {
    id: 'nanopet',
    name: 'NanoPet',
    type: 'AI Pet',
    status: 'Online',
    battery: 82,
    mode: 'Companion',
    description: 'Pocket-sized companion with adaptive mood lighting.',
    xp: 320,
    lastActivity: '2 min ago',
    accentLabel: 'Companion',
    actions: ['Voice', 'Lights']
  },
  {
    id: 'skyhawk',
    name: 'SkyHawk',
    type: 'Drone',
    status: 'Online',
    battery: 64,
    mode: 'Patrol',
    description: 'Autonomous aerial scout for route inspection.',
    xp: 470,
    lastActivity: '8 min ago',
    accentLabel: 'Patrol',
    actions: ['Auto', 'Lights']
  },
  {
    id: 'cyberdog',
    name: 'CyberDog',
    type: 'Robot Dog',
    status: 'Standby',
    battery: 41,
    mode: 'Guard',
    description: 'Four-legged companion built for responsive motion.',
    xp: 610,
    lastActivity: '14 min ago',
    accentLabel: 'Guard',
    actions: ['Voice', 'Return']
  }
];

module.exports = mockDevices;
