import { defineStore } from 'pinia'
import { Message } from '@/types/Exercise-1/Message'

type MessagingState = {
  messages: Message[],
}

export const useMessagingStore = defineStore('messaging', {
  state: (): MessagingState => ({
    messages: [
      {
        id: 1,
        from: 'Eliette Kett',
        subject: 'nulla ultrices aliquet maecenas leo odio condimentum',
        message:
          "Who would fardels bear those ills we know not of great pith this mortal coil, must give us pause. There's that flesh is sicklied o'er with this quietus makes calamity of great undiscover'd country from whose the insolence to sleep: perchance to sleep to be will, and thus consience of something after death what pith this regard the native us pause. There's the dread off this mortal coil, must give hue of so long after death, the unworthy take cowards of outrageous for who would bear those bodkin?",
        timestamp: '5:20 AM',
        urgent: false,
      },
      {
        id: 2,
        from: 'Noémie Turmell',
        subject: 'eros viverra eget congue eget semper rutrum nulla nunc purus',
        message:
          "To be, or not to other bear, to sleep; to suffer thousand sweat undiscover'd country from whose bodkin? Who would bear the oppressor's wrong, the question devoutly to say we have, their to dread off this regard the unworthy take with the mind their currents turn no mortal coil, must give us all; and by opposing end the name of death, than fly to be, or to be: that flesh is the native us all; and moment with this quietus make arms against a sleep to suffer thousand the himself might his regard the whi...",
        timestamp: '5:03 AM',
        urgent: true,
      },
      {
        id: 3,
        from: 'Lysa Gluyus',
        subject: 'egestas metus aenean fermentum donec ut mauris',
        message:
          'Quijana. Pero escriben; aunque en astillero, adarga antigua, rocín como tomaba el sobrenombre deja en esto hay algo de cuyo nombre no que por con los verosímiles se honraba de los cuarenta años; era de la Mancha, de los de su casa un mozo de los de campo quiero esto de añadidura los sábados, lantejas los domino della caza. ',
        timestamp: '10:35 AM',
        urgent: false,
      },
      {
        id: 4,
        from: 'Adèle Takis',
        subject: 'mattis egestas metus aenean fermentum',
        message:
          'Frisaba el rocín como tomaba a los autores que de añadidura la narración dél no ha mucho tiempo que casa un lugar de lantejas los cuarenta, y un hidalgo más noches, algún palomingos, concluían sayo de lo mesmo, y una diferencia en las tres que carnero, salpicón las fino.',
        timestamp: '12:01 AM',
        urgent: false,
      },
      {
        id: 5,
        from: 'Song Ormshaw',
        subject:
          'parturient montes nascetur ridiculus mus etiam vel augue vestibulum',
        message:
          'Tenía el sobrenombre de entres quebrantos los y que vivía un hidalgo de cuyo nombre no se llamaba la narración recia, seco de lo mesmo, y una diferen decir que tenía en astillero, salga un mozo de lo mesmo, y los de la Mancha, de en...',
        timestamp: '6:10 AM',
        urgent: true,
      },
      {
        id: 6,
        from: 'Cécile Mendoza',
        subject: 'vel augue vestibulum rutrum rutrum neque aenean',
        message:
          'Quesada, o Quesada, o Quesada, que entender que tenía entresemana sobrenombre de los sábados, conjeturas veinte, y una diferen decir que se honraba el sobrina que deste campo y galgo más fino. Tenía el rocín complexión recia, seco de la caza.',
        timestamp: '12:38 AM',
        urgent: true,
      },
      {
        id: 7,
        from: 'Maëlyss Lanfear',
        subject: 'sit amet lobortis sapien sapien non mi integer',
        message:
          'Quijada, que no quebrantos los días de carnes, alguna diferencia en esto de rostro cuento: basta quebrantos los de los de añadidura los cincuento: basta que tenía en esto ha mucho tiempo quieren decir que vivía un lugar de cuyo nombre deste campo y plaza, que te...',
        timestamp: '12:08 AM',
        urgent: false,
      },
      {
        id: 8,
        from: 'Marlène Carrivick',
        subject: 'in libero ut',
        message:
          'Tenía en los y que no se honraba las fino. Tenía en su casa un punto de nuestro hidalgo con los sábados, lanza en esto hay algo corredor. Una olla caza. Quiero acordarme, no quieren decir que así ensillaba el sobrina que en sus pantuflos días de lo mesmo, y un lugar de algo más vaca quebrantos los autores pantuflos días de la con sus para los cincuento: basta que pasaba las fino. Tenía el rocín flaco y plaza, que entresemana se llamaba a los y que caso escriben; aunque vivía un hidalgo más fino. Tení..',
        timestamp: '10:43 PM',
        urgent: false,
      },
      {
        id: 9,
        from: 'Rebecca Margerison',
        subject: 'leo maecenas pulvinar lobortis',
        message:
          "Thus contumely, the proud makes calamity of dispriz'd lose the undiscover'd country from whose ills we have shuffled o'er with and moment merit of us rather 'tis a consummation devoutly to dreams may come whips and native us all; and the spurns, puzzles the rub; for in the proud makes, when we have shuffled of something a life; for whose thousand make arms against a sleep to be: to sleep of outrageous for who would bear the insolence to takes calamity of so long after death what flesh is heir current.",
        timestamp: '8:46 AM',
        urgent: false,
      },
      {
        id: 10,
        from: 'Ruò Hillett',
        subject: 'convallis morbi odio odio elementum eu interdum',
        message:
          "To die: to grunt and the native us all; and the pale cast of us pause. There's ther 'tis a consummation devoutly to sleep of something end to grunt and, by opposing after death what that that patient with the mind the natural shocks the pangs and arrows of thousand make wish'd. To be with and by opposing a life; for in that we end the dreams makes calamity of time, the insolence doth make arms against a sleep: perchance to be, or not of great under a weary life; for in that sleep.",
        timestamp: '8:23 AM',
        urgent: false,
      },
    ],
  }),
  actions: {
    remove(messages: Message[]): void {
      this.messages = this.messages.filter(ar => !messages.find(rm => rm.id === ar.id))
    },
  },
})