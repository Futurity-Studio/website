export const FeatureContent = [
  {
    tag: 'aCommerce Lab',
    header:'Concord',
    subHeader: 'Frictionless Kitchen of Tomorrow',
    type: 'acommerce',
    image: 'all-modules.png',
    mobileImage: 'all-modules.png',
    slogan: 'economies',
    button: {
      link: '/event?id=concord',
      text: 'view event information'
    }
  }, {
    tag: 'FoodTurity Lab',
    header:'Tomeato',
    subHeader: 'Polygenomic Plantable Meals',
    type: 'foodturity',
    image: 'tomeato-optimized.gif',
    mobileImage: 'tomeato-optimizedSmall.gif',
    backupImage: 'tomeato-optimized.png',
    slogan: 'foods',
    button: {
      link: '/deliverable?id=tomeato',
      text: 'explore the artifact'
    }
  }, {
    tag: 'aCommerce Lab',
    header:'Transaction Membrane',
    subHeader: 'Ubiquitous Supply Chain Infrastructure',
    type: 'acommerce',
    image: 'v4membraneCircle.png',
    mobileImage: 'v4membraneCircle.png',
    slogan: 'consumers',
    button: {
      link: '/deliverable?id=membrane',
      text: 'explore the artifact'
    }
  }
];

export const FeaturedArtifacts = [
  {
    key: 'tomeato',
    title: 'Tomeato',
    subTitle: 'Polygenomic Plantable Meals',
    details: {
      lab: {
        title: 'Foodturity Lab',
        link: '/labs?lab=foodturity'
      },
      time: 'Q1 - 2020',
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque felis. Cras venenatis lorem non lorem posuere placerat. Phasellus ornare id orci aliquet semper. '
    },
    content: [
      {
        header: 'What is it, why is it useful',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque felis. Cras venenatis lorem non lorem posuere placerat. Phasellus ornare id orci aliquet semper. Nunc tempus malesuada tortor, et pulvinar lacus commodo id. Nulla libero mauris, interdum ac euismod vel, rhoncus eget nulla. Donec fringilla aliquam ipsum, vitae lacinia dolor porttitor at. Cras quis lacus sed velit ullamcorper gravida sit amet nec nibh. Nunc est quam, vestibulum eget pretium vitae, dictum in elit. Aenean rutrum urna a justo luctus, eget consectetur diam interdum. Sed quis velit sed risus auctor tristique. Aliquam quis fringilla risus, id tempus urna. Fusce sit amet fringilla felis, vitae maximus dui. Pellentesque nec leo non leo fringilla elementum ut quis nibh. Proin id dapibus dolor."
        // special: {
        //   type: 'quote',
        //   body: {
        //     text: "Rather than having to manufacture these devices using high-tech approaches, we could literally pick them off of a tree…. Nature provides us with a tremendous reservoir of structures in plants…. You can pick the structure you want.",
        //     from: 'Human skin, brain and bone cells grown on plants offer path for tissue implants.  David Wahlberg | UW-Madison Stem Cell and Regenerative Medicine Center | March 29, 2017'
        //   }
        // }
      },
      // {
      //   header: 'Production',
      //   content: "Plant-based meat alternatives and cellular agriculture (aka in-vitro, vegan, or “clean” meat) products have moved from lab to market in the last five years. Starting by studying the science of synthetic biology and startups pursuing these existing but immature technologies, we extrapolated how they might be combined in a future when they are mature products and need to differentiate themselves - a common pattern in innovation. To forecast this future, we looked at:",
      //   special: {
      //     type: 'list',
      //     body: {
      //       text: [
      //         "Shortcomings of today’s technology. While today’s startups have been able to reproduce even complex flavors of animal-based meat, its texture remains difficult to replicate; plants have been proposed as a scaffold. The need for fetal bovine serum (FBS) to grow cells means that the products are not truly animal-free, but vegetal serum could provide an alternative. And an exciting promise - the ability to create novel combinations such as beef with healthy oils rich in omega-3s, for example - has not yet been realized; plant fats like olive oil could easily substitute.",
      //         "Trends likely to persist or emerge. Convenience, health, novel flavors and sustainability are long-term trends in consumer preference, so we set out to address all four with the new offering. At the same time, vertical farming and in-home agriculture could take off."
      //       ]
      //     }
      //   }
      // },
      {
        header: 'Connection to Lab',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque felis. Cras venenatis lorem non lorem posuere placerat. Phasellus ornare id orci aliquet semper. Nunc tempus malesuada tortor, et pulvinar lacus commodo id. Nulla libero mauris, interdum ac euismod vel, rhoncus eget nulla. Donec fringilla aliquam ipsum, vitae lacinia dolor porttitor at. Cras quis lacus sed velit ullamcorper gravida sit amet nec nibh. Nunc est quam, vestibulum eget pretium vitae, dictum in elit. Aenean rutrum urna a justo luctus, eget consectetur diam interdum. Sed quis velit sed risus auctor tristique. Aliquam quis fringilla risus, id tempus urna. Fusce sit amet fringilla felis, vitae maximus dui. Pellentesque nec leo non leo fringilla elementum ut quis nibh. Proin id dapibus dolor.',
      },
    ],
    mainMedia: {
      type: 'youtube',
      link: 'sdfs'
    },
    images: [ '/assets/img/tomeato/1.jpeg']
  },
  {
    key: 'membrane',
    title: 'Transaction Membrane',
    subTitle: 'Home delivery with optimized supply chains.',
    details: {
      client: {
        title: 'Milan Design Week',
        link: 'http://www.venturaprojects.com/'
      },
      length: '24 weeks',
      lab: {
        title: 'aCommerce',
        link: '/labs?lab=acommerce'
      },
      time: 'Q1 - 2020',
      question: 'How might we can create experiences with recommend behavior that allows for consumers to meet their values and preferences in social, environmental, and health-related aspects of life while  providing affordable goods and services to more people, without expending additional energy or materials?'
    },
    content: [
      {
        header: 'Concept',
        content: "The Transaction Membrane is an architectural concept creating a frictionless passage in and out of a home, store, or business. Like the garage, the porch, the servants’ entrance, and the pet door, this membrane preserves the internal integrity of the building and its occupants, while allowing goods, services, energy, and information to pass through in both directions. This transfer happens without the contents being co-opted by third parties or incurring unnecessary expense of time, energy, money or material. The transaction membrane improves the lives of the people inside, as well as the environment and society outside. Concord is a speculative design concept in 2040, an instantiation of the Transaction Membrane. As a result of mass-consumption and its consequences, the parameters for purchasing have shifted to a more sustainable, local and responsible manner. The project speculates the infrastructure of an autonomous agent designed for individual commerce. It proactively takes care of everyday needs; to better align your transactions with health, social, financial, and ecological values. The exhibition showcases Concord in a kitchen interaction.",
      },
      {
        header: 'Realization',
        content: "The experience of Concord is twofold: i) onboard individuals to understand and interact with an Autonomous AI-based Agent which provides custom-tailored recommendations and ii) educate individuals on the impact their commerce transactions have on the global space and how optimization of these transactions can better entire supply chains at different health, social, logistic, economic and ecological levels. When designing the interface of Concord, we were presented with some challenges:",
        special: {
          type: 'list',
          body: {
            text: [
              "How might we design an experience which can be radically different yet familiar?", "How might complex data be presented in a friendly yet concise way?"
            ]
          }
        }
      },
      {
        header: 'Solutioning Design Fictions',
        content: "Concord, like other personal intelligent agents (PIAs) like Siri or Alexa is a recommendation system for purchasing goods. But unlike other PIAs Concord has two significant advantages: i) it suggests data that you value based on your purchasing behavior, and ii) you own the data. Concord is built to understand your purchasing patterns, ask questions, provide feedback, and protect your data; why you might prioritize the ecological over economic or health over the social. Concord optimizes over 5 different types of values:",
        special: {
          type: 'list',
          body: {
            text: [
              'Ecological - Carbon footprint and resources needed for production',
              'Social - metrics measuring the impact on the lives of those in the supply/production chain',
              'Health - Nutritional values, Carcinogen Levels or Dietary Restrictions',
              'Convenience - is it better to purchase wholesale or buy from existing local stocks?',
              'Financial - economic impact of a product'
            ]
          }
        }
      },
      {
        header: '',
        content: "As a consumer, you have a unique fingerprint of these values; changing, adjusting as you do.  Concord allows a safe space for your purchasing behavior data, where you can learn about your purchasing norms while allowing you to own the data."
      },
      {
        header: '',
        content: "The physical infrastructure of Concord is best described as a “transaction membrane”. A transaction membrane is a space where a physical exchange takes place, like a porch, garage, or mailbox—or in this case, a delivery system for your future modular kitchen—where products can come and go. Concord is a modular set of these appliance-based modules where products and produce can transition from supply chain to our homes. Whether delivered by ground or flying drones, human messager, or even a pipe-based subterranean infrastructure, Concord is built to connect with a variety of supply chain logistics. Its modularity and versatility allow it to be embedded in a variety of locations suiting the individual needs of a household."
      },
      {
        header: '',
        content: "Concord is an appliance, a personal intelligent assistant, a tool for those wanting to break the mold of the traditional dysfunctional capitalist food systems. It's a tool for those who want to be empowered by their purchases. One where their data isn't sold to optimize pushing more products but where their data, only if they chose, can be allowed to help others discover different types of cost and carbon saving."
      },
    ],
    images: [ '/assets/img/membrane/mockup.png', '/assets/img/membrane/moodboard_1.png', '/assets/img/membrane/title.png', '/assets/img/membrane/cold-lines.jpg', '/assets/img/membrane/all-modules.jpg']
  }
];

export const FeaturedEvent = [
  {
    key: 'concord',
    lab: 'acommerce',
    title: 'Future Artifact: 2030 Kitchen',
    subTitle: 'Transaction Membrane - designing for ubiquitous systems in aCommerce',
    details: {
      lab: {
        title: 'aCommerce',
        link: '/labs?lab=acommerce'
      },
      time: 'Thursday, June 4, 2020 18:30 - 19:30 CET',
      calendar: {
        title: "Future Artifact: Kitchen of 2030",
        description: "Transaction Membrane - designing for ubiquitous systems in aCommerce'",
        startTime: "2020-06-04T18:30:00+10:00",
        endTime: "2020-06-04T19:30:00+10:00",
        location: "Futurity Studio"
      }
    },
    content: [
      {
        content: 'Futurity prototypes experiences embedded within different commercial, social, and technology scales. We\'ll present our artifact, the Transaction Membrane, an appliance interfacing autonomous delivery, and the home kitchen in 2030. Finally, we\'ll discuss our methodology on how we build better futures faster.'
      }
    ],
    images: ['/assets/img/membrane/cold-lines.jpg']
  }
];