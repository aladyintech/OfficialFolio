export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to gush about how fatafati (that means awesome :D) tech is, feel free to send me an email. Iiit's smatin.au@gmail.com!",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, C++, Java, C#, Python, SQL, PHP, Swift, Objective-C, R",
			color: "1",
			percentage: "78",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs, NumPy, Bootstrap, Vuejs, NET",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "60",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3), Heroku, Netlify",
			color: "3",
			percentage: "40",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS, CSS",
			color: "4",
			percentage: "90",
		},
		{
			title: "Version Control",
			skillName: "GitHub, JIRA, Trello, Azure DevOps, Maven",
			color: "7",
			percentage: "90",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "90",
		},
		{
			title: "QA Testing Tools",
			skillName: "Selenium, Appium",
			color: "5",
			percentage: "40",
		},
		{
			title: "Editor",
			skillName: "VS Code, Eclipse, Android Studio",
			color: "6",
			percentage: "90",
		},
	],
	projects: {
		web: [
			{
				projectName: "PokeDex",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a Pokedex from scratch fetched from API.",
				techStack: [
					"JavaScript",
					"HTML5",
					"CSS",
					"jQuery",
					"Bootstrap"
				],
			},
			{
				projectName: "Movie-API",
				image: "images/findyourbank.png",
				summary:
					"Developed a movie API.",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Heroku"],
			},
			{
				projectName: "Web-Portfolio",
				image: "images/portfolio.png",
				summary:
					"As another way to showcase my skill, this very portfolio is another project.",
				preview: "https://samia-gits-it.github.io/OfficialFolio/",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "ToDo-App",
				image: "images/resume-builder.png",
				summary:
					"A simple to do app.",
				preview: "https://samia-gits-it.github.io/OfficialFolio/",
				techStack: ["HTML5", "Bootstrap", "JavaScript"],
			},
		],
		
		software: [
			{
				projectName: "Nice-Guys",
				image: "images/pizzaorderchatbot.png",
				summary:
					"Forum app for users to protect themselves from predators.",
				preview:
					"https://samia-gits-it.github.io/OfficialFolio/",
				techStack: ["Backend", "Frontend"],
			},
			{
				projectName: "Discord-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://samia-gits-it.github.io/OfficialFolio/",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill-Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://samia-gits-it.github.io/OfficialFolio/",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/samia-gits-it",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	
	experience: [
		{
			title: "Selenium Training",
			duration: "April 2022 - Present",
			subtitle: "QA Engineer",
			details: [
				"Trained by professional in QA Testing software and with Maven."
			],
			tags: [
				"Selenium",
				"Selenium WebDriver",
				"TestNG",
				"Maven",
				"Postman",
			],
			icon: "heartbeat",
		},
		{
			title: "Global Tell Link.",
			duration: "May 2018 - Jan 2022",
			subtitle: "SDET",
			details: [
				"Created testing systems to identify issues within software.",
				"Evaluated existing technology to identify areas of improvement.",
				"Built test automation framework for various software projects.",
			],
			tags: [
				"JavaScript",
				"Selenium",
				"Agile",
				"Postman",
				"Nodejs",
				"Maven Build",
			],
			icon: "qrcode",
		},
		{
			title: "Digital Punk Studios",
			duration: "Aug 2014 - May 2018",
			subtitle: "Junior App Developer",
			details: [
				"Collaborated with a team of 4 other engineers to design, engineer, and deploy an Android application with JavaScript, HTML5, and CSS3 for Digital Punk Studios.",
				"Developed a safespace Web Application from scratch to protect users from predators online.",
			],
			tags: ["JavaScript", "HTML", "CSS", "Postman", "mySQL"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "Jan 2019 - Mar 2021",
			subtitle: "Saint Leo University Worldwide",
			details: [
				"Dean Lister in Fall 2020.",
				"Omega Nu Lambda and other Honors Awards.",
				"Courses involved information such as Data Structures, Java, Software Engineering, and Project Management.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "CareerFoundry",
			duration: "",
			subtitle: "Certified in Full Stack Web Development",
			details: [
				"Qualified in Web Development.",
				"Earned certification learning languages such as JavaScript, HTML5, Ajax, CSS, React, and more.",
			],
			tags: ["Web Design", "JavaScript", "FullStack"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/samia-gits-it",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://www.github.com",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/samiamtn/",
				},
			],
		},
	],
};
