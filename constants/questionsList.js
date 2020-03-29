// when inserting this into the questions component, be sure to copy objects and not refs to objects
const questions = {
    social: [
        {
            prompt: 'Did you call friends or family today?',
            weight: 2,
        },
        {
            prompt: 'Set up a game night?',
            weight: 2,
        },
        {
            prompt:
                'Reach out into your community, find ways to volunteer, whether online or in person.',
            weight: 2,
        },
        {
            prompt: 'Did you reach out to anyone new?',
            weight: 1,
        },
        {
            prompt: 'Did you maintain social distance today?',
            weight: 2,
        },
        {
            prompt: 'Thank a medical staff member today for their services.',
            weight: 2,
        },
    ],
    mental: [
        {
            prompt: 'Wake up at a regular time today.',
            weight: 1,
        },
        {
            prompt:
                'Learn/try something new today. Maybe a new hobby, or picking up an old one.',
            weight: 1,
        },
        {
            prompt: 'Find something to smile about today.',
            weight: 1,
        },
        {
            prompt: 'Meditate.',
            weight: 1,
        },
        {
            prompt: 'Did you wake up at a normal time today?',
            weight: 1,
        },
        {
            prompt: 'Read a book, or a few chapters.',
            weight: 2,
        },
    ],
    physical: [
        {
            prompt: 'Stretch/do Yoga for 20 minutes.',
            weight: 3,
        },
        {
            prompt: 'Do 20 pushups, then 20 situps.',
            weight: 2,
        },
        {
            prompt:
                "Drink at least 8 glasses of water today. Hey I don't make the rules.",
            weight: 2,
        },
        {
            prompt:
                'Do a home workout through a program. A lot of them are free.',
            weight: 2,
        },
        {
            prompt: 'Do a workout with a friend.',
            weight: 2,
        },
    ],
    informational: [
        {
            prompt: 'Keep up to date about Coronavirus.',
            weight: 2,
        },
        {
            prompt: 'Do you know your local quarantine policies?',
            weight: 2,
        },
        {
            prompt:
                'Stay up to date on evolving treatments and what to do if you get sick.',
            weight: 2,
        },
    ],
}
export default questions
