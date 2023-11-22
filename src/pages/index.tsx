import dummyData from './api/cardData'
import FormLayout from './Component/form/FormLayout'
import CardLayout from './Component/card/CardLayout'


interface Card {
  id: number;
  image: string;
  title: string;
  name: string;
  address: string;
  time: string;
  experience: string;
  salary: string;
  employees: string;
  buttonName: string;
  buttonClassName: string;
}

export default function Home() {
  return (
    <main>
       <section className='wrapper'>
          <FormLayout />    
        </section>
        <section className='card-cover'>
          <div className='wrapper'>
            <div className='card-list'>
              {dummyData.map((card : Card) => (
                <CardLayout 
                  key={card.id}
                  image={card.image} 
                  title={card.title}
                  Name={card.name}
                  Address={card.address}
                  time={card.time}
                  experience={card.experience}
                  salary={card.salary}
                  employees={card.employees}
                  buttonName={card.buttonName}
                  buttonClassName={card.buttonClassName}
                />
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}
