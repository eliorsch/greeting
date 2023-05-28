import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseEventTail from "../elements/CloseEventTail";
import RegularEventTail from "../elements/RegularEventTail";
import img from "../../SharedScreenshot.jpg";
import  EventsManager from "../../../webApp/react/src/utils/EventsManager";
import { getAuth } from "firebase/auth";

export default function MainView() {
  const eventsManager = new EventsManager(getAuth().currentUser.uid);
  const [events, setEvents] = useState([]);

  function getEvents() {
    eventsManager
      .getAllEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    getEvents();
    eventsManager.setupRealtimeListener(getEvents);
  }, []);
  console.log(events);
function foo() {
  eventsManager.createEvent(eventsManager.getNewEvent())
}

  return (
    <Container sx={{ borderRadius: "25%", mt: "1rem" }}>
      <Button onClick={foo}>fooo</Button>
      <Typography>אירועים קרובים</Typography>
      <Box
        sx={{
          height: "20vh",
          display: "flex",
          flexWrap: "nowrap",
          gap: "1rem",
          overflowX: "scroll",
        }}
      >
        <CloseEventTail name="אליאור" event="יום הולדת" date={"18/02"} />
      </Box>
      <Typography>כל האירועים</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap:'wrap',
          alignItems: "center",
          gap: "1rem",
          overflowY:'scroll',
          height:'60vh'
        }}
      >
        <img src={img} width={"100%"} />

        <RegularEventTail
          name="אליאור"
          event="יום הולדת"
          date={new Date("02/18/1997")}
        />
        {events.map((event, i) => <RegularEventTail
          name={event.personName}
          key={i}
          event="יום הולדת"
          date={new Date("02/18/1997")}
        />)}
      </Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
      voluptate, aut voluptatem itaque sequi deserunt debitis eveniet magni enim
      ad adipisci quod nemo accusantium iusto sit sunt? Consequuntur, repellat?
      Libero ut est nisi repellat provident ducimus veniam totam in voluptatem
      laboriosam ratione dicta doloremque recusandae, reprehenderit voluptas
      rerum vel id molestias beatae perspiciatis consectetur. Id dolore eum
      perferendis omnis voluptatem quam rem magni autem officia eveniet.
      Voluptatem nulla debitis voluptates atque optio ut, nihil doloribus sit,
      similique eaque quas corporis recusandae quasi ipsam, dolorem assumenda
      eveniet iusto. Beatae animi eum molestiae necessitatibus neque vel
      cupiditate eius, quibusdam assumenda nesciunt, hic quia? Ratione adipisci
      suscipit, dicta modi pariatur labore quibusdam maxime! Quos facere maxime
      iste quia unde provident omnis iusto sequi. Velit, est facilis. Quisquam
      asperiores, voluptates tenetur incidunt doloremque temporibus consequuntur
      eos assumenda mollitia tempore voluptatem, eius atque non facere
      distinctio vero nihil numquam ad libero aliquid soluta cupiditate?
      Inventore earum, libero optio, dolorum voluptatem eum ipsum animi
      architecto quod voluptate quisquam distinctio eius, recusandae
      accusantium. Facere ut vero voluptates nulla autem quos atque animi? Esse
      distinctio corporis similique molestiae consequatur explicabo nam
      veritatis tempore molestias deserunt, nemo natus nisi exercitationem sed
      veniam harum repellat quaerat sapiente tenetur. Iure architecto, accusamus
      minima recusandae cupiditate, tempore ab, facilis voluptatum soluta quos
      nihil deleniti? Aliquid eligendi numquam error quos unde velit nobis
      voluptas, veniam, rem saepe odio alias eum dolores aspernatur repudiandae.
      Assumenda aspernatur nesciunt quas quaerat unde iusto dicta dolorem
      quibusdam? Ipsum, in reiciendis obcaecati provident dolor excepturi sed
      unde deleniti pariatur eveniet quos eos, officiis ab corporis at! Pariatur
      accusantium, aut vel soluta ex eligendi delectus blanditiis sequi
      voluptatibus rerum et natus fuga laboriosam quis vitae numquam hic! Quo
      unde in facere obcaecati libero quas voluptatum, distinctio commodi
      quisquam placeat, alias esse sed ullam? Facere, esse asperiores. Id
      laboriosam aperiam vel voluptatem sed rerum labore! Ratione consectetur,
      est dolores obcaecati fuga rerum nam deserunt libero cum, nisi illum
      facere cupiditate corporis accusantium qui, suscipit esse perspiciatis!
      Dolorem nam officiis quisquam vero iusto nemo sunt tempore fugit delectus
      corrupti magni est distinctio illo ducimus sed aliquid, ad inventore,
      commodi perferendis praesentium totam! Id libero asperiores quod vitae
      aperiam quisquam aspernatur enim praesentium. Provident obcaecati,
      suscipit voluptas sint eum cum, corrupti ipsam non nobis atque magnam
      aliquam commodi est itaque repellendus? Facere totam doloribus unde harum
      libero consequatur reprehenderit architecto dicta id quas, consectetur,
      saepe earum magnam asperiores repudiandae, aspernatur rem. At aut quis
      adipisci quidem quibusdam ut a amet magni, distinctio cumque minus quod
      reiciendis exercitationem consectetur illum blanditiis quos maxime
      praesentium aspernatur, quasi quae libero cum quo obcaecati. Praesentium
      ipsam, aspernatur quam odio sit cum quos deserunt saepe, ut, repellendus
      enim iste delectus quis voluptate nesciunt fuga totam error repudiandae ab
      alias temporibus! Veniam dolor odit, dolore officiis earum pariatur,
      asperiores illum ratione, amet sit laboriosam possimus nemo minima ducimus
      quia recusandae. Et voluptates vitae quisquam iusto dolore, dolor maiores
      sapiente sed modi eligendi labore quia aliquid ab nesciunt laborum,
      deserunt quos quis nobis dolores nulla nostrum cupiditate? Magnam
      veritatis iure expedita provident debitis totam facilis iste. Ducimus
      laborum odit ipsa odio deserunt, repellat nesciunt animi consequuntur
      laudantium nobis aspernatur quia fuga inventore doloremque a tempore at
      nam quos! Dolor animi velit accusamus sunt, corporis blanditiis nulla
      natus dolores, hic odio delectus omnis minima excepturi eos voluptatum
      nisi nostrum sapiente? At maxime provident ea itaque accusantium incidunt
      voluptas. Debitis dolorum tempora minima ut eius odit animi quam saepe
      praesentium voluptatibus porro repudiandae alias ducimus facilis quasi
      voluptas, quaerat itaque unde libero doloremque voluptatem illo ratione
      labore? Vero cum voluptate eligendi, aliquam explicabo laboriosam ipsam
      quod tenetur aperiam at nihil optio doloremque odio! Modi ipsam vel,
      voluptatum labore mollitia, beatae nisi a non magnam accusantium animi
      obcaecati tempora quia enim commodi sed autem aperiam, consequuntur fuga
      necessitatibus sunt porro? Sequi at rerum, rem mollitia molestias
      doloribus doloremque asperiores maiores dicta consectetur reprehenderit
      harum quas expedita, eos voluptatibus, esse beatae ut aliquam explicabo
      aperiam aut earum quae possimus est. Minus rem tempora soluta ad
      blanditiis est assumenda eligendi quod sequi suscipit incidunt sapiente
      itaque, odit animi eveniet necessitatibus ipsa! Labore reiciendis
      repellendus obcaecati distinctio! Aut fugit quas esse aliquam debitis
      repudiandae voluptates vero, molestias saepe tenetur. Fuga facere,
      reprehenderit quis cupiditate aut nisi. Facilis temporibus ad alias qui
      mollitia voluptatem enim saepe sed, voluptate architecto fugit expedita
      ullam in vitae vero perferendis, dignissimos consectetur, fuga rem ea
      corrupti maiores? Assumenda, hic. Voluptas quisquam ratione sunt officiis
      quo nam soluta quaerat inventore, magnam, praesentium, iste quae placeat?
      Sed accusamus dolores eum temporibus animi nihil, culpa eos beatae tenetur
      quasi placeat impedit magni officiis unde ipsa sequi natus exercitationem
      corrupti voluptate quisquam suscipit deserunt libero qui. Provident
      maiores unde voluptatibus nam sunt voluptatum corporis nihil! Doloribus
      atque provident, quod sed laborum veniam delectus officia nulla laudantium
      deleniti fugit culpa nihil repellendus eum repudiandae soluta? Magni nisi
      nemo itaque, earum quae consequatur quis dolorem eum iusto debitis dolorum
      tempora, dicta impedit quisquam quam eligendi ipsam at, nobis saepe.
      Repellendus praesentium magnam vero nemo dolor sapiente asperiores commodi
      eum est natus quo tempora voluptas quis obcaecati at, maxime molestiae?
      Eaque repudiandae optio quidem tempora asperiores iste consequuntur
      quisquam doloribus non nemo neque repellendus fuga quod officia dolores
      aliquid tenetur sit est eius voluptatum atque, necessitatibus qui.
      Quisquam temporibus unde cumque perferendis quia pariatur velit, voluptate
      quidem. Reprehenderit quam aliquid aut quaerat, ipsum, natus suscipit unde
      alias eaque obcaecati optio ullam. Nam ipsum nobis assumenda minus veniam
      doloremque ratione. Iste porro ut facere eius? Quis, fugiat, amet
      consequuntur omnis illo in sunt rem recusandae quidem, labore quasi maxime
      sequi quod earum pariatur enim obcaecati vero ad ipsam laborum id totam
      tempore perferendis! Praesentium, magnam fugit neque commodi in tempore
      sapiente vero voluptatem repellat harum consectetur iusto adipisci,
      molestias mollitia numquam reiciendis. Adipisci hic repellendus
      consequuntur dolor soluta ipsam temporibus error dignissimos labore
      blanditiis? Vel id necessitatibus veniam. Tenetur libero vitae atque
      alias, cumque est magnam ut incidunt repellendus vero cum doloribus eos,
      id vel, ullam commodi! Vel odit et ullam modi dolorum fugit necessitatibus
      atque itaque asperiores!
    </Container>
  );
}
