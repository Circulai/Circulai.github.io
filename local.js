const localData = [
  {
    "company_name": "Aignostics",
    "description": "A Health Tech company leveraging AI and machine learning technologies to advance medical diagnostics.",
    "topics": ["Health Tech", "AI", "Machine learning"],
    "founded_in": "",
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": "",
    "job_openings": 0,
    "funding_amount": "$46.00M",
    "founders": [
      { "name": "Viktor Matyas", "role": "Co-founder & CEO" },
      { "name": "Maximilian Alber", "role": "Chief Technology Officer" }
    ]
  },
  {
    "company_name": "CoachHub",
    "description": "An Edtech company using AI to provide personalized coaching and professional development.",
    "topics": ["Edtech", "AI"],
    "founded_in": "2018-01-01",
    "location": "",
    "country": "",
    "employee_count": "501 - 1000",
    "job_openings": 0,
    "funding_amount": "$252.68M",
    "founders": [
      { "name": "Thanos Karpouzis", "role": "Chief Technology Officer" }
    ]
  },
  {
    "company_name": "Deepset",
    "description": "An AI and open-source company focused on natural language processing solutions.",
    "topics": ["AI", "Open source"],
    "founded_in": "2018-01-01",
    "location": "",
    "country": "",
    "employee_count": "11 - 50",
    "job_openings": 0,
    "funding_amount": "$45.60M",
    "founders": [
      { "name": "Malte Pietsch", "role": "Co-Founder & CTO" }
    ]
  },
  {
    "company_name": "Northbound",
    "description": "An AI-driven SaaS company optimizing supply chain and logistics.",
    "topics": ["AI", "Supply Chain & Logistics", "SaaS"],
    "founded_in": "2023-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 9",
    "job_openings": 0,
    "funding_amount": "$1.40M",
    "founders": [
      { "name": "Andreas Canel", "role": "CEO" },
      { "name": "Rahul Ynot", "role": "CTO" }
    ]
  },
  {
    "company_name": "clare&me",
    "description": "Health Tech company with AI-driven solutions focused on fitness and mental wellness.",
    "topics": ["Health Tech", "AI", "Fitness"],
    "founded_in": "2021-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$5.24M",
    "founders": [
      { "name": "Celina Messner", "role": "Co-Founder" }
    ]
  },
  {
    "company_name": "Alcemy",
    "description": "AI-powered solutions for the proptech and real estate sectors.",
    "topics": ["AI", "Proptech & Real Estate"],
    "founded_in": "2018-01-01",
    "location": "",
    "country": "",
    "employee_count": "11 - 50",
    "job_openings": 0,
    "funding_amount": "$10.00M",
    "founders": [
      { "name": "Leopold Spenner", "role": "CEO" },
      { "name": "Robert Meyer", "role": "CTO" }
    ]
  },
  {
    "company_name": "FrontNow",
    "description": "AI-focused ecommerce solutions provider.",
    "topics": ["AI", "Ecommerce"],
    "founded_in": "2020-01-01",
    "location": "",
    "country": "",
    "employee_count": "11 - 50",
    "job_openings": 0,
    "funding_amount": "$5.66M",
    "founders": [
      { "name": "Bernhard Lihotzky", "role": "Founder & Managing Director" }
    ]
  },
  {
    "company_name": "Ygo Trips",
    "description": "AI-powered platform for personalized travel planning and experiences.",
    "topics": ["AI", "Travel Tech"],
    "founded_in": "2022-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$2.80M",
    "founders": [
      { "name": "Julian Kögel", "role": "CEO" },
      { "name": "Willi Ibbeken", "role": "CPO" }
    ]
  },
  {
    "company_name": "Spread",
    "description": "Develops AI and machine learning solutions for the mobility and transportation industries.",
    "topics": ["AI", "Machine learning", "Mobility & Transportation"],
    "founded_in": "2019-01-01",
    "location": "",
    "country": "",
    "employee_count": "51 - 100",
    "job_openings": 0,
    "funding_amount": "$18.88M",
    "founders": [
      { "name": "Robert Goebel", "role": "Co-founder | Managing Director" }
    ]
  },
  {
    "company_name": "Faircado",
    "description": "Ecommerce platform powered by AI to improve fair trading practices.",
    "topics": ["AI", "Ecommerce"],
    "founded_in": "2021-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$3.97M",
    "founders": [
      { "name": "Evoléna de Wilde d'Estmael", "role": "CEO" }
    ]
  },
  {
    "company_name": "Infarm",
    "description": "Agritech and foodtech company leveraging AI to advance urban farming.",
    "topics": ["Agritech", "Foodtech", "AI"],
    "founded_in": "2013-01-01",
    "location": "",
    "country": "",
    "employee_count": "201 - 499",
    "job_openings": 0,
    "funding_amount": "$200.00M",
    "founders": [
      { "name": "Erez Galonska", "role": "INFARM founder / CEO" }
    ]
  },
  {
    "company_name": "Productsup",
    "description": "AI-driven solutions for ecommerce, sales, and marketing.",
    "topics": ["AI", "Sales and Marketing", "Ecommerce"],
    "founded_in": "2010-01-01",
    "location": "",
    "country": "",
    "employee_count": "201 - 499",
    "job_openings": 0,
    "funding_amount": "$70.00M",
    "founders": [
      { "name": "Vincent Peters", "role": "Chief Executive Officer" }
    ]
  },
  {
    "company_name": "Spectrm",
    "description": "Provides AI-driven messaging and data analytics solutions.",
    "topics": ["AI", "Messaging", "Data and Analytics"],
    "founded_in": "2015-01-01",
    "location": "",
    "country": "",
    "employee_count": "51 - 199",
    "job_openings": 0,
    "funding_amount": "$11.00M",
    "founders": [
      { "name": "Max Koziolek", "role": "Co Founder" }
    ]
  },
  {
    "company_name": "Workist",
    "description": "AI and deep tech company specializing in data analytics solutions.",
    "topics": ["AI", "Deep Tech", "Data and Analytics"],
    "founded_in": "",
    "location": "",
    "country": "",
    "employee_count": "11 - 49",
    "job_openings": 0,
    "funding_amount": "$11.73M",
    "founders": [
      { "name": "Tim Wegner", "role": "Founder & Managing Director" }
    ]
  },
  {
    "company_name": "Levity",
    "description": "Provides machine learning solutions with AI technology for various industries.",
    "topics": ["AI", "Machine learning", "Technology"],
    "founded_in": "2020-01-01",
    "location": "",
    "country": "",
    "employee_count": "11 - 49",
    "job_openings": 0,
    "funding_amount": "$10.00M",
    "founders": [
      { "name": "Gero Keil", "role": "CEO" }
    ]
  },
  {
    "company_name": "Ovom Care",
    "description": "Health Tech company focusing on AI-powered healthcare solutions.",
    "topics": ["Health Tech", "AI"],
    "founded_in": "2023-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$6.14M",
    "founders": []
  },
  {
    "company_name": "Parloa",
    "description": "Offers AI and machine learning messaging solutions for businesses.",
    "topics": ["AI", "Machine learning", "Messaging"],
    "founded_in": "2017-01-01",
    "location": "",
    "country": "",
    "employee_count": "101 - 250",
    "job_openings": 0,
    "funding_amount": "$91.85M",
    "founders": [
      { "name": "Stefan Ostwald", "role": "Co-Founder and Managing Director" }
    ]
  },
  {
    "company_name": "Solsten",
    "description": "An AI-focused company in gaming and adtech.",
    "topics": ["Gaming", "AI", "Adtech"],
    "founded_in": "",
    "location": "",
    "country": "",
    "employee_count": "11 - 50",
    "job_openings": 0,
    "funding_amount": "$30.70M",
    "founders": []
  },
  {
    "company_name": "Frequenz",
    "description": "Climate and green tech company applying AI for energy solutions.",
    "topics": ["Climate Tech & Green Tech", "AI", "Energy & Nuclear"],
    "founded_in": "2019-01-01",
    "location": "",
    "country": "",
    "employee_count": "11 - 49",
    "job_openings": 0,
    "funding_amount": "$13.00M",
    "founders": [
      { "name": "Lars Kirchhoff", "role": "Co-Founder" }
    ]
  },
  {
    "company_name": "a2zebra",
    "description": "Edtech company focused on AI-powered education solutions.",
    "topics": ["Edtech", "AI"],
    "founded_in": "2022-01-01",
    "location": "",
    "country": "",
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$0.50M",
    "founders": []
  },
  {
    "company_name": "Ada Health",
    "description": "Health Tech company developing AI solutions for mobile healthcare.",
    "topics": ["Health Tech", "AI", "Mobile"],
    "founded_in": "2011-01-01",
    "location": "",
    "country": "",
    "employee_count": "101 - 250",
    "job_openings": 0,
    "funding_amount": "$90.00M",
    "founders": [
      { "name": "Daniel Nathrath", "role": "Co-Founder and CEO" }
    ]
  },

  {
    "company_name": "deepset",
    "description": "Natural language processing and neural search for developers & enterprise",
    "topics": ["Natural language processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "20",
    "job_openings": 4,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "explosion.ai",
    "description": "Tools for machine learning and NLP (e.g., spaCy)",
    "topics": ["Natural language processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "19",
    "job_openings": 0,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "Lateral",
    "description": "ML platform that helps teams with knowledge tasks by capturing their expertise",
    "topics": ["Natural language processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "9",
    "job_openings": 0,
    "funding_amount": "4 rounds",
    "founders": []
  },
  {
    "company_name": "lengoo",
    "description": "Translation service combining AI and linguists",
    "topics": ["Natural language processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "138",
    "job_openings": 1,
    "funding_amount": "Series B",
    "founders": []
  },
  {
    "company_name": "LF1",
    "description": "AI innovation lab developing proprietary and open-source AI software and technology",
    "topics": ["Natural language processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "6",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Aaron.ai",
    "description": "Voice processing for companies",
    "topics": ["Voice & sound"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "24",
    "job_openings": 10,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Audatic",
    "description": "Sound modification to filter unwanted sounds and enhance interesting ones",
    "topics": ["Voice & sound"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "19",
    "job_openings": 1,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Pixtunes",
    "description": "Real-time soundtracks generated by AI",
    "topics": ["Voice & sound"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "18",
    "job_openings": 8,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "i2x",
    "description": "Real-time conversation analytics and coaching for customer interactions",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "44",
    "job_openings": 2,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "RASA",
    "description": "Framework for chatbots/AI assistants and NLP tasks",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "157",
    "job_openings": 20,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "solvemate",
    "description": "Platform for customer service automation",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "37",
    "job_openings": 5,
    "funding_amount": "4 rounds",
    "founders": []
  },
  {
    "company_name": "Twyla",
    "description": "Conversation design software for chatbots",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "4",
    "job_openings": 0,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "ultimate.ai",
    "description": "Customer service automation",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "117",
    "job_openings": 4,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "voixen.ai",
    "description": "Voice analysis for coaching in customer service",
    "topics": ["Chatbots & customer service"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "6",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Mobius Labs",
    "description": "Superhuman vision for every application",
    "topics": ["Computer vision"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "41",
    "job_openings": 3,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Parkling",
    "description": "Computer vision solutions for parking",
    "topics": ["Computer vision"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "10",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Peregrine",
    "description": "Real-time traffic video analytics",
    "topics": ["Computer vision"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "24",
    "job_openings": 1,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Hypatos",
    "description": "Document processing with deep learning",
    "topics": ["Document processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "48",
    "job_openings": 3,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Smacc",
    "description": "Invoice processing with AI",
    "topics": ["Document processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "27",
    "job_openings": 0,
    "funding_amount": "5 rounds",
    "founders": []
  },
  {
    "company_name": "Workist",
    "description": "Automation of document processing & administrative processes",
    "topics": ["Document processing"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "19",
    "job_openings": 23,
    "funding_amount": "Seed",
    "founders": []
  },




  {
    "company_name": "Jina AI",
    "description": "An easier way to build neural search in the cloud",
    "topics": ["Search & recommendation"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "41",
    "job_openings": 11,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "JustWatch",
    "description": "Recommendation system for streaming services",
    "topics": ["Search & recommendation"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "114",
    "job_openings": 47,
    "funding_amount": "2 rounds",
    "founders": []
  },
  {
    "company_name": "Nyris",
    "description": "Computer vision-powered, custom search engine",
    "topics": ["Search & recommendation"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "35",
    "job_openings": 6,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Goggo Network",
    "description": "Networks of autonomous cars",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "21",
    "job_openings": 0,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "deepsafety",
    "description": "AI safety solutions for autonomous driving",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "8",
    "job_openings": 0,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "MOTOR AI",
    "description": "Autonomous driving system based on cognitive neuroscience",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "10",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Phantasma Labs",
    "description": "Simulations for self-driving cars",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "8",
    "job_openings": 5,
    "funding_amount": "2 rounds",
    "founders": []
  },
  {
    "company_name": "REE Technology",
    "description": "Stealth-mode startup creating a new mobility solution",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "86",
    "job_openings": 2,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "SiaSearch",
    "description": "Smart data decisions for automotive developers",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "5",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Teraki",
    "description": "Data mobility applications",
    "topics": ["Self-driving cars"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "42",
    "job_openings": 3,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "enway",
    "description": "Autonomous cleaning robot for industry applications",
    "topics": ["Robots"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "25",
    "job_openings": 5,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Micropsi Industries",
    "description": "Robots that can be trained by humans",
    "topics": ["Robots"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "45",
    "job_openings": 7,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "Ada Health",
    "description": "AI-powered health & diagnosis app",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "271",
    "job_openings": 29,
    "funding_amount": "Series B",
    "founders": []
  },
  {
    "company_name": "ai4medicine",
    "description": "Data analytics for prevention, treatment, and understanding of diseases",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "6",
    "job_openings": 0,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "AICURA medical",
    "description": "Infrastructure for learning on spatially distributed medical data",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "18",
    "job_openings": 0,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Aignostics",
    "description": "AI-powered precision diagnostics for pathology",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "33",
    "job_openings": 2,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "mediaire",
    "description": "Analysis of MRI images for brain volumetry and lesion characterization",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "31",
    "job_openings": 3,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Nocturne",
    "description": "Measurement of retinal shape changes for neurology",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "3",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  {
    "company_name": "Vara",
    "description": "Breast cancer screening platform powered by AI",
    "topics": ["Medicine"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "37",
    "job_openings": 4,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Hazy",
    "description": "Synthetic data for building privacy-preserving AI",
    "topics": ["AI ethics"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "40",
    "job_openings": 1,
    "funding_amount": "Series A",
    "founders": []
  },
  {
    "company_name": "DataFleets",
    "description": "Data platform for preserving privacy while training AI",
    "topics": ["AI ethics"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "26",
    "job_openings": 2,
    "funding_amount": "Seed",
    "founders": []
  },
  {
    "company_name": "Realytics",
    "description": "AI models for evaluating real-world evidence",
    "topics": ["AI ethics"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "10",
    "job_openings": 0,
    "funding_amount": null,
    "founders": []
  },
  
  {
    "company_name": "Flink",
    "description": "Flink is a food delivery company leveraging technology to streamline the process of food logistics and service.",
    "topics": ["Foodtech", "Food Delivery", "Software as a service (SaaS)"],
    "founded_in": "2020-01-01",
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": "5001 - 9999",
    "job_openings": 0,
    "funding_amount": "$1352.00M",
    "founders": [
      {
        "name": "Dirk Daumann",
        "role": "CTO"
      }
    ]
  },
  {
    "company_name": "Razor (company)",
    "description": "Razor is an e-commerce infrastructure company providing robust solutions for online retailers.",
    "topics": ["Ecommerce", "E-commerce", "eCommerce Infrastructure"],
    "founded_in": "2020-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 999",
    "job_openings": 0,
    "funding_amount": "$331.64M",
    "founders": [
      {
        "name": "Lorento Omatseye",
        "role": "Senior Financial Accountant / Accounting integration manager"
      }
    ]
  },
  {
    "company_name": "GetYourGuide",
    "description": "GetYourGuide is a travel tech company that connects travelers with guided tours and activities.",
    "topics": ["Travel Tech", "Community & Lifestyle", "Ecommerce"],
    "founded_in": "2009-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 1000",
    "job_openings": 0,
    "funding_amount": "$749.50M",
    "founders": [
      {
        "name": "Udi Nir",
        "role": "CTO"
      }
    ]
  },
  {
    "company_name": "Blacklane",
    "description": "Blacklane offers a premium mobility and transportation service for travelers worldwide.",
    "topics": ["Mobility & Transportation", "Software as a service (SaaS)", "Transportation"],
    "founded_in": "2014-01-01",
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": null,
    "job_openings": 0,
    "funding_amount": "$197.00M",
    "founders": [
      {
        "name": "Jens Wohltorf",
        "role": "Co-founder & CEO"
      }
    ]
  },
  {
    "company_name": "N26 (bank)",
    "description": "N26 is a fintech company offering mobile banking services to customers globally.",
    "topics": ["FinTech", "Payments", "Technology"],
    "founded_in": "2013-01-01",
    "location": "Berlin",
    "country": "Germany",
    "employee_count": "1001 - 4999",
    "job_openings": 0,
    "funding_amount": "$1410.53M",
    "founders": [
      {
        "name": "Gino Cordt",
        "role": "CTO"
      }
    ]
  },
  {
    "company_name": "Tourlane",
    "description": "Tourlane is a travel tech company providing personalized travel planning services.",
    "topics": ["Travel Tech", "Service industry", "Software as a service (SaaS)"],
    "founded_in": "2017-01-01",
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": null,
    "job_openings": 0,
    "funding_amount": "$80.50M",
    "founders": [
      {
        "name": "Julian Weselek",
        "role": "CEO"
      }
    ]
  },
  {
    "company_name": "Formo",
    "description": "Formo is a foodtech company focusing on manufacturing plant-based food products using advanced biotechnology.",
    "topics": ["Foodtech", "Biotech", "Manufacturing"],
    "founded_in": "2019-01-01",
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": "51 - 199",
    "job_openings": 0,
    "funding_amount": "$111.50M",
    "founders": [
      {
        "name": "Raffael Wohlgensinger",
        "role": "Founder & CEO"
      }
    ]
  },
  {
    "company_name": "AUTO1",
    "description": "AUTO1 is an e-commerce platform for buying and selling used cars.",
    "topics": ["Mobility & Transportation", "Ecommerce"],
    "founded_in": "2012-01-01",
    "location": null,
    "country": null,
    "employee_count": "1001 - 5000",
    "job_openings": 0,
    "funding_amount": "$1284.90M",
    "founders": [
      {
        "name": "Christian Bertermann",
        "role": "Co-Founder & CEO"
      },
      {
        "name": "Ted Sporre",
        "role": "Vice President Nordics and Managing Director Nordics"
      }
    ]
  },
  {
    "company_name": "TIER Mobility",
    "description": "TIER Mobility provides electric scooters and bikes for urban mobility.",
    "topics": ["Scooter", "Mobility & Transportation", "Ecommerce"],
    "founded_in": "2018-01-01",
    "location": null,
    "country": null,
    "employee_count": "1001 - 4999",
    "job_openings": 0,
    "funding_amount": "$581.40M",
    "founders": [
      {
        "name": "Nuno Simaria",
        "role": "Chief Technology Officer"
      }
    ]
  },
  {
    "company_name": "Contentful",
    "description": "Contentful is a developer tools company providing content management solutions.",
    "topics": ["Sales and Marketing", "Developer Tools", "Technology"],
    "founded_in": "2013-06-26",
    "location": null,
    "country": null,
    "employee_count": "501 - 999",
    "job_openings": 0,
    "funding_amount": "$348.30M",
    "founders": [
      {
        "name": "Paolo",
        "role": "CTO & Co-Founder"
      }
    ]
  },
  {
    "company_name": "Omio",
    "description": "Omio is a travel tech platform helping users plan and book transportation for trips.",
    "topics": ["Travel Tech", "Service industry"],
    "founded_in": "2013-01-01",
    "location": null,
    "country": null,
    "employee_count": "251 - 500",
    "job_openings": 0,
    "funding_amount": "$476.00M",
    "founders": [
      {
        "name": "Naren Shaam",
        "role": "CEO and Founder"
      }
    ]
  },
  {
    "company_name": "M0 Labs",
    "description": "M0 Labs is a crypto and web3 company focused on developer tools and SaaS solutions.",
    "topics": ["Crypto & web3", "Developer Tools", "Software as a service (SaaS)"],
    "founded_in": "2023-01-01",
    "location": null,
    "country": null,
    "employee_count": "11 - 49",
    "job_openings": 0,
    "funding_amount": "$35.00M",
    "founders": [
      {
        "name": "Luca Prosperi",
        "role": "CEO"
      },
      {
        "name": "Oliver Schimek",
        "role": "COO"
      }
    ]
  },
  {
    "company_name": "Gorillas",
    "description": "Gorillas is a foodtech startup focused on rapid delivery of groceries via an on-demand mobile app.",
    "topics": ["Foodtech", "CPG & Consumer Goods", "Mobile"],
    "founded_in": "2020-01-01",
    "location": null,
    "country": null,
    "employee_count": "1001 - 4999",
    "job_openings": 0,
    "funding_amount": "$1284.00M",
    "founders": [
      {
        "name": "Zoltan Pinter",
        "role": "Vice President, Strategy and Business Development"
      },
      {
        "name": "Joerg Kattner",
        "role": "CEO"
      }
    ]
  },
  {
    "company_name": "SellerX",
    "description": "SellerX is an e-commerce company focused on building and scaling consumer brands.",
    "topics": ["CPG & Consumer Goods", "Sales and Marketing", "Ecommerce"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "501 - 1000",
    "job_openings": 0,
    "funding_amount": "$705.07M",
    "founders": [
      {
        "name": "Ryan Gnesin",
        "role": "President & Board Member"
      }
    ]
  },
  {
    "company_name": "Nuventura",
    "description": "Nuventura is a hardware company specializing in clean energy and nuclear technology.",
    "topics": ["Hardware", "Energy & Nuclear", "Clean technology"],
    "founded_in": "2017-01-01",
    "location": null,
    "country": null,
    "employee_count": "1 - 9",
    "job_openings": 0,
    "funding_amount": "$29.88M",
    "founders": [
      {
        "name": "Fabian Lemke",
        "role": "Co-founder & Managing Director"
      }
    ]
  },
  {
    "company_name": "Nextwind",
    "description": "Nextwind is a green tech company focused on climate technology and sustainable energy solutions.",
    "topics": ["Climate Tech & Green Tech", "Energy & Nuclear"],
    "founded_in": "2020-01-01",
    "location": null,
    "country": null,
    "employee_count": "1 - 10",
    "job_openings": 0,
    "funding_amount": "$750.00M",
    "founders": [
      {
        "name": "Lars Meyer",
        "role": "Co-CEO and Co-Founder"
      },
      {
        "name": "Markus Hoppe",
        "role": "Senior Financial Controller"
      }
    ]
  },
  {
    "company_name": "Forto",
    "description": "Forto is a logistics company that helps businesses optimize supply chain and transportation operations.",
    "topics": ["Logistics", "Mobility & Transportation", "Supply Chain & Logistics"],
    "founded_in": "2016-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 999",
    "job_openings": 0,
    "funding_amount": "$543.00M",
    "founders": [
      {
        "name": "Erik Muttersbach",
        "role": "Co-Founder | Managing Director"
      }
    ]
  },
  {
    "company_name": "Taxfix",
    "description": "Taxfix is a fintech company offering digital tax filing solutions.",
    "topics": ["FinTech", "Business Intelligence"],
    "founded_in": "2016-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 1000",
    "job_openings": 0,
    "funding_amount": "$330.00M",
    "founders": [
      {
        "name": "Lino Teuteberg",
        "role": "CPO & Founder"
      }
    ]
  },
  {
    "company_name": "Aignostics",
    "description": "Aignostics is a health tech company focusing on artificial intelligence and machine learning solutions for healthcare.",
    "topics": ["Health Tech", "AI", "Machine learning"],
    "founded_in": null,
    "location": "Köpenick, Berlin",
    "country": "Germany",
    "employee_count": null,
    "job_openings": 0,
    "funding_amount": "$46.00M",
    "founders": [
      {
        "name": "Viktor Matyas",
        "role": "Co-founder & CEO"
      },
      {
        "name": "Maximilian Alber",
        "role": "Chief Technology Officer"
      }
    ]
  },
  {
    "company_name": "Thryve",
    "description": "Thryve is a data analytics and SaaS company providing solutions for API integration.",
    "topics": ["Data and Analytics", "Software as a service (SaaS)", "Application programming interface (API)"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "11 - 49",
    "job_openings": 0,
    "funding_amount": "$5.70M",
    "founders": []
  },
  {
    "company_name": "Mambu (company)",
    "description": "Mambu is a fintech company providing cloud banking platforms for lenders.",
    "topics": ["FinTech", "Payments", "Lending"],
    "founded_in": "2011-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 999",
    "job_openings": 0,
    "funding_amount": "$445.75M",
    "founders": [
      {
        "name": "Frederik Pfisterer",
        "role": "Founder & Managing Director"
      }
    ]
  },
  {
    "company_name": "wefox",
    "description": "wefox is a mobile-first fintech company offering insurance solutions.",
    "topics": ["FinTech", "Mobile", "Ecommerce"],
    "founded_in": null,
    "location": null,
    "country": null,
    "employee_count": "201 - 499",
    "job_openings": 0,
    "funding_amount": "$923.95M",
    "founders": [
      {
        "name": "Paul Onnen",
        "role": "Chief Technology Officer"
      }
    ]
  },
  {
    "company_name": "solarisBank",
    "description": "solarisBank is a fintech company offering digital banking solutions.",
    "topics": ["FinTech", "Payments"],
    "founded_in": "2016-01-01",
    "location": null,
    "country": null,
    "employee_count": "501 - 1000",
    "job_openings": 0,
    "funding_amount": "$221.88M",
    "founders": [
      {
        "name": "Georg Hauer",
        "role": "Co-founder & CEO"
      }
    ]
  },
  {
    "company_name": "Momox",
    "description": "Momox is an e-commerce platform focused on the resale of second-hand products.",
    "topics": ["Ecommerce", "Mobility & Transportation", "Retail"],
    "founded_in": "2004-01-01",
    "location": null,
    "country": null,
    "employee_count": "1001 - 5000",
    "job_openings": 0,
    "funding_amount": "$45.00M",
    "founders": [
      {
        "name": "Benjamin S.",
        "role": "CEO"
      }
    ]
  },
  {
    "company_name": "Einride",
    "description": "Einride is an innovative logistics company providing electric autonomous vehicles for freight transportation.",
    "topics": ["Logistics", "Mobility & Transportation", "Automotive"],
    "founded_in": "2020-01-01",
    "location": null,
    "country": null,
    "employee_count": "201 - 500",
    "job_openings": 0,
    "funding_amount": "$185.00M",
    "founders": [
      {
        "name": "Fredrik Persson",
        "role": "CEO"
      }
    ]
  }

]
