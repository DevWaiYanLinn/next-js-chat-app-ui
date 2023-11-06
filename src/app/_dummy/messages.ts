import { faker } from '@faker-js/faker'

const dummyReceiverMessage = () => {
    const randCount = Array(Math.floor(Math.random() * 5) + 1).fill(1).map((v, i) => v + 1)

    return randCount.map(() => {
        return {
            content: faker.word.words(Math.floor(Math.floor(Math.random() * 10) + 1)),
            id:faker.string.uuid()
        }
    })
}

export default function getDummyMessages() {
    const messages = []

    const sender = [faker.image.avatarLegacy(),faker.image.avatarLegacy()]
    let index = 0;
   

    for (let i = 0; i < 10; i++) {
        const getSenderIndex = Math.floor(Math.random() * sender.length)
        messages.push({
            sender: sender[index],
            senderInex: index,
            messages: dummyReceiverMessage()
        })
        index = 1-index
    }

    return messages
}
