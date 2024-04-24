import aquamanImage from "../../assets/action/aquaman.png"
import avatarImage from "../../assets/action/avatar.png"
import avatarLastAirBenderImage from "../../assets/action/avatar_last_airbender.png"
import blackAdamImage from "../../assets/action/black_adam.png"
import deadpoolImage from "../../assets/action/deadpool.png"
import dontBreathImage from "../../assets/action/dont_breath.png"
import hiddenStrikeImage from "../../assets/action/hidden_strike.png"
import shazamImage from "../../assets/action/shazam.png"
import spiderManImage from "../../assets/action/spider_man.png"
import theMarvelsImage from "../../assets/action/the_marvels.png"
import thorImage from "../../assets/action/thor.png"
import wonderWomanImage from "../../assets/action/wonder_woman.png"

import angryBirdsImage from "../../assets/cartoon/angry_birds.png"
import fairlyOddParentsImage from "../../assets/cartoon/fairly_odd_parents.png"
import jimmyNeutronImage from "../../assets/cartoon/jimmy_neutron.png"
import johnnyBravoImage from "../../assets/cartoon/johnny_bravo.png"
import ladyBugImage from "../../assets/cartoon/lady_bug.png"
import nimonaImage from "../../assets/cartoon/nimona.png"
import peterPanImage from "../../assets/cartoon/peter_pan.png"
import sanjayAndCraigImage from "../../assets/cartoon/sanjay_and_craig.png"
import spongeBobImage from "../../assets/cartoon/spongebob.png"
import superMarioImage from "../../assets/cartoon/super_mario.png"
import thePowerPuffGirlsImage from "../../assets/cartoon/the_powerpuff_girls.png"
import tomAndJerryImage from "../../assets/cartoon/tom_and_jerry.png"

import barbieImage from "../../assets/others/barbie.png"
import beautifulDisasterImage from "../../assets/others/beautiful_disaster.png"
import fearStreetOneImage from "../../assets/others/fear_street_one.png"
import fearStreetTwoImage from "../../assets/others/fear_street_two.png"
import fearStreetThreeImage from "../../assets/others/fear_street_three.png"
import ghostedImage from "../../assets/others/ghosted.png"
import joyRideImage from "../../assets/others/joy_ride.png"
import loveAgainImage from "../../assets/others/love_again.png"
import noHardFeelingsImage from "../../assets/others/no_hard_feelings.png"
import peterPanFilmImage from "../../assets/others/peter_pan_film.png"
import theLastAirBenderImage from "../../assets/others/the_last_air_bender.png"
import theTigerApprenticeImage from "../../assets/others/the_tiger_apprentice.png"

//NavBar Component
export const NAV_BAR_TITLE = "MovieBox"




//HomePage and MoviePage
export const ACTION_MOVIES_TITLE = "Action"

export const ACTION_MOVIE_CATEGORY = "action"

export const ACTION_MOVIE_ONE_ID = "aqua_man"
export const ACTION_MOVIE_TWO_ID = "avatar"
export const ACTION_MOVIE_THREE_ID = "avatar_last_ari_bender"
export const ACTION_MOVIE_FOUR_ID = "black_adam"
export const ACTION_MOVIE_FIVE_ID = "deadpool"
export const ACTION_MOVIE_SIX_ID = "don't_breath_2"
export const ACTION_MOVIE_SEVEN_ID = "hidden_strike"
export const ACTION_MOVIE_EIGHT_ID = "shazam"
export const ACTION_MOVIE_NINE_ID = "spider_man"
export const ACTION_MOVIE_TEN_ID = "the_marvels"
export const ACTION_MOVIE_ELEVEN_ID = "thor"
export const ACTION_MOVIE_TWELVE_ID = "wonder_woman"

export const ACTION_MOVIE_IDS = [
    ACTION_MOVIE_ONE_ID,
    ACTION_MOVIE_TWO_ID,
    ACTION_MOVIE_THREE_ID,
    ACTION_MOVIE_FOUR_ID,
    ACTION_MOVIE_FIVE_ID,
    ACTION_MOVIE_SIX_ID,
    ACTION_MOVIE_SEVEN_ID,
    ACTION_MOVIE_EIGHT_ID,
    ACTION_MOVIE_NINE_ID,
    ACTION_MOVIE_TEN_ID,
    ACTION_MOVIE_ELEVEN_ID,
    ACTION_MOVIE_TWELVE_ID,
    
]

export const ACTION_MOVIES = [
    {
        id: ACTION_MOVIE_ONE_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: aquamanImage,
        title: "Aquaman",
        releaseDate: "21 December 2018",
        description: [
            "Aquaman is a 2018 American superhero film based on the DC character of the same name. Co-produced and distributed by Warner Bros. Pictures, it is the sixth film in the DC Extended Universe (DCEU). Directed by James Wan from a screenplay by David Leslie Johnson-McGoldrick and Will Beall, it stars Jason Momoa as Arthur Curry / Aquaman, who sets out to lead the underwater kingdom of Atlantis and stop his half-brother, King Orm (Patrick Wilson) from uniting the seven underwater kingdoms to destroy the surface world. Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, and Nicole Kidman also star in supporting roles.",
            "Development began in 2004 but did not gain traction until Man of Steel was released in 2013. In August 2014, Beall and Kurt Johnstad were hired to write competing scripts. Wan signed on as director in April 2015, and in July 2016, the film moved forward with Beall's screenplay. The main cast was confirmed through 2016 and early 2017. Principal photography began in Australia in May 2017, taking place at Village Roadshow Studios on the Gold Coast, Queensland, Australia, with additional production teams in Canada, Italy and Morocco. Filming concluded the following October. Several vendors provided visual effects, ranging from high-detail hair simulations to the creation of CGI animals and locations.",
            "Aquaman premiered in London on November 26, 2018, and was released in the United States on December 21. While the film received mixed reviews from critics, it grossed $1.152 billion worldwide, making it the highest-grossing DCEU film, the highest-grossing film based on a DC Comics character, the fifth-highest-grossing film of 2018, and the 20th highest-grossing film of all time. A sequel, Aquaman and the Lost Kingdom, was released on December 22, 2023, while a non-canonical animated miniseries, Aquaman: King of Atlantis, is set after the events of this film and was released in October 2021."
        ]
    },
    {
        id: ACTION_MOVIE_TWO_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: avatarImage,
        title: "Avatar",
        releaseDate: "10 December 2009",
        description: [
            "Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron. The cast includes Sam Worthington, Zoe Saldana, Sigourney Weaver, Michelle Rodriguez, Stephen Lang, Joel David Moore, Giovanni Ribisi, CCH Pounder, Dileep Rao, Matt Gerald, Laz Alonso, and Wes Studi It is the first installment in the Avatar franchise. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.",
            "Development of Avatar began in 1994, when James Cameron wrote an 80-page treatment for the film. Filming was supposed to take place after the completion of Cameron's 1997 film Titanic, for a planned release in 1999; however, according to Cameron, the necessary technology was not yet available to achieve his vision of the film. Work on the language of the Na'vi began in 2005, and Cameron began developing the screenplay and fictional universe in early 2006. Avatar was officially budgeted at $237 million, due to the groundbreaking array of new visual effects Cameron achieved in cooperation with Weta Digital in Wellington. Other estimates put the cost at between $280 million and $310 million for production and at $150 million for promotion. The film made extensive use of new motion capture filming techniques and was released for traditional viewing, 3D viewing (using the RealD 3D, Dolby 3D, XpanD 3D, and IMAX 3D formats), and '4D' experiences in selected South Korean theaters.",
            "Avatar premiered on December 10, 2009, in London and was released in the United States on December 18, 2009, to positive reviews. Critics highly praised its groundbreaking visual effects, though the story received some criticism for being derivative. During its theatrical run, the film broke several box office records, including becoming the highest-grossing film of all time. In July 2019, this position was overtaken by Avengers: Endgame, but with subsequent re-releases, beginning with China in March 2021, it returned to becoming the highest-grossing film since then. Adjusted for inflation, Avatar is the second-highest-grossing movie of all time, only behind Gone with the Wind, with a total of a little more than $3.5 billion. It also became the first film to gross more than $2 billion[25] and the best-selling video title of 2010 in the United States. Avatar was nominated for nine awards at the 82nd Academy Awards, winning three, and received numerous other accolades. The success of the film also led to electronics manufacturers releasing 3D televisions and caused 3D films to increase in popularity. Its success led to the Avatar franchise, which includes the sequels Avatar: The Way of Water (2022), Avatar 3 (2025), Avatar 4 (2029), and Avatar 5 (2031)."
        ]
    },
    {
        id: ACTION_MOVIE_THREE_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: avatarLastAirBenderImage,
        title: "Avatar: Last Air Bender",
        releaseDate: "22 February 2024",
        description: [
            "Avatar: The Last Airbender is an American adventure fantasy television series developed by Albert Kim for Netflix. It is a live-action adaptation of the animated television series of the same name created by Michael Dante DiMartino and Bryan Konietzko for Nickelodeon. The series stars an ensemble cast including Gordon Cormier, Kiawentiio, Ian Ousley, Dallas Liu, Paul Sun-Hyung Lee, Ken Leung, and Daniel Dae Kim.",
            "The series is set in a fictional world where human civilization is divided into four nations based on the four classical elements: the Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. In each nation, some people known as 'benders' can telekinetically manipulate one of the four elements. The story follows the journey of twelve-year-old Aang, the last survivor of the Air Nomads and the next 'Avatar' who can master all four elements. The series was first announced in September 2018, with DiMartino and Konietzko attached as both executive producers and showrunners. However, in June 2020, the pair departed the series over creative differences. In August 2021, Kim was officially announced as a writer, executive producer and showrunner.",
            "The first season was released on Netflix on February 22, 2024, and garnered mixed reception from critics. In March 2024, the series was renewed for a second and third season."
        ]
    },
    {
        id: ACTION_MOVIE_FOUR_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: blackAdamImage,
        title: "Black Adam",
        releaseDate: "21 October 2022",
        description: [
            "Black Adam is a 2022 American superhero film based on the DC character of the same name. Produced by New Line Cinema, DC Films, Seven Bucks Productions, and FlynnPictureCo. and distributed by Warner Bros. Pictures, it is a spin-off from Shazam! (2019) and the 11th film in the DC Extended Universe (DCEU). Directed by Jaume Collet-Serra from a script by Adam Sztykiel and the writing team of Rory Haines and Sohrab Noshirvani, the film stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his magic imprisonment by a group of archeologists to free the nation of Kahndaq from the crime syndicate Intergang, whose local leader plans to obtain an ancient relic called the Crown of Sabbac to take control of it. Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari, Quintessa Swindell, and Pierce Brosnan appear in supporting roles.",
            "Johnson was attached to Shazam! early in development and confirmed to portray the villain Black Adam in September 2014, but the producers, at Johnson's urging, later decided to give the character his own film. Sztykiel was hired in October 2017. Collet-Serra joined in June 2019 with a planned release date of December 2021, but this timeline was delayed by the COVID-19 pandemic. Additional casting took place over the next year, including four members of the Justice Society of America, along with the script being rewritten by Haines and Noshirvani. Principal photography took place from April to August 2021 at Trilith Studios in Atlanta, Georgia, and also in Los Angeles.",
            "Black Adam premiered in Mexico City on October 3, 2022, and was theatrically released in the United States on October 21. It was not well received by critics and grossed $393 million worldwide, becoming a box-office bomb for failing to break even."
        ]
    },
    {
        id: ACTION_MOVIE_FIVE_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: deadpoolImage,
        title: "DeadPool",
        releaseDate: "12 February 2016",
        description: [
            "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is a spin-off of the X-Men film series and its eighth installment overall. Directed by Tim Miller and written by Rhett Reese and Paul Wernick, it stars Ryan Reynolds in the title role alongside Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man who gave him mutant abilities and a scarred physical appearance, becoming the antihero Deadpool.",
            "Development of a Deadpool film starring Reynolds began in February 2004, before he played the character in X-Men Origins: Wolverine (2009). Reese and Wernick were hired for a spin-off in 2010, and worked with Reynolds to adapt the character more faithfully (including his fourth wall breaking) after the portrayal in Wolverine was criticized. Miller was hired in 2011. An enthusiastic response to leaked test footage he created with Reynolds led to a greenlight from Fox in 2014. Additional casting began in early 2015, and principal photography took place in Vancouver, British Columbia, from March to May of that year. Several vendors provided visual effects for the film, ranging from the addition of blood and gore to the creation of the CGI character Colossus.",
            "Deadpool premiered at the Le Grand Rex in Paris on February 8, 2016, and was released in the United States on February 12, after an unconventional marketing campaign. The film achieved both financial and critical success. It earned $782.8 million against a $58 million budget, becoming the ninth-highest grossing film of 2016 and breaking numerous records, including the highest-grossing film in the X-Men series and the highest-grossing R-rated film at the time. Critics praised Reynolds' performance, the film's style, and faithfulness to the comics, along with its action sequences, though some criticized the plot as formulaic and were divided on the film's adult humor. It received many awards and nominations, including two Critics' Choice awards and two Golden Globe nominations.",
            "A sequel, Deadpool 2, was released on May 2018 to comparable critical and commercial success. Following the acquisition of 21st Century Fox by Disney, the character's film rights were returned to Marvel Studios alongside the X-Men and the Fantastic Four. Deadpool & Wolverine, a third film starring Reynolds and Hugh Jackman, which will integrate the characters into the Marvel Cinematic Universe (MCU), is scheduled for release on July 2024, as part of Phase Five of the MCU."
        ]
    },
    {
        id: ACTION_MOVIE_SIX_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: dontBreathImage,
        title: "Don't Breath 2",
        releaseDate: "14 August 2021",
        description: [
            "Don't Breathe 2 is a 2021 American horror thriller film directed by Rodo Sayagues in his directorial debut, from a screenplay he co-wrote with Fede Álvarez. The sequel to 2016's Don't Breathe, it was produced by Álvarez, Sam Raimi and Robert Tapert. The film stars Stephen Lang, reprising his role as Norman Nordstrom / 'The Blind Man', with Brendan Sexton III and Madelyn Grace in supporting roles.",
            "After the critical and commercial success of the first film, talks for a sequel began in November 2016, with Álvarez then set to return as the film's director. In January 2020, the project was green-lit by the studio, with Sayagues replacing Álvarez as director and Lang reprising his role. Principal photography began on August 7, 2020, in Belgrade, Serbia, and wrapped on October 8, 2020.",
            "Don't Breathe 2 was theatrically released in the United States on August 14, 2021, by Sony Pictures Releasing. The film grossed $53 million worldwide, making it a moderate success, and received mixed reviews from critics, with praise for Lang's performance, but criticism for the screenplay. A third film is in development."
        ]
    },
    {
        id: ACTION_MOVIE_SEVEN_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: hiddenStrikeImage,
        title: "Hidden Strike",
        releaseDate: "28 July 2023",
        description: [
            "Hidden Strike (also known as Project X-Traction in some markets) is a 2023 action-adventure film directed and edited by Scott Waugh and written by Arash Amel. The film stars Jackie Chan, John Cena, Ma Chunrui, and Pilou Asbaek.",
            "Hidden Strike was released on 6 July 2023 in the United Arab Emirates and then it was released on 28 July 2023 in the United States and internationally via Netflix. It received mixed reviews from critics and underperformed at the box office, grossing $917,381 against a budget of $80 million."
        ]
    },
    {
        id: ACTION_MOVIE_EIGHT_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: shazamImage,
        title: "Shazam",
        releaseDate: "5 April 2019",
        description: [
            "Shazam! is a 2019 American superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, the Safran Company, and Seven Bucks Productions, and distributed by Warner Bros. Pictures, it is the seventh installment in the DC Extended Universe (DCEU). It was directed by David F. Sandberg from a screenplay by Henry Gayden who co-wrote the story with Darren Lemke, and stars Zachary Levi, Mark Strong, Asher Angel, Jack Dylan Grazer, and Djimon Hounsou. The film follows teenager Billy Batson (Angel) as he is chosen by the ancient wizard Shazam (Hounsou) to be his new champion by saying the name 'Shazam, allowing him to transform into an adult superhero (Levi) with various superpowers. Billy and his foster brother Freddy Freeman (Grazer) must discover Billy's new powers in order to stop the evil Dr. Thaddeus Sivana (Strong) and the Seven Deadly Sins.",
            "Development of a live-action Shazam! film began at New Line in the early 2000s, but was delayed for several years. The film went into pre-production in 2009, with Peter Segal as director, John August as writer and Dwayne Johnson being considered to star as the villain Black Adam, but the project fell through; Johnson acts as an executive producer on Shazam! William Goldman, Alec Sokolow, Joel Cohen, Bill Birch, and Geoff Johns, among others, were all attached to the project as writers at various points. The film was officially announced in 2014, with Johnson attached to star as either Shazam or Black Adam. In January 2017, he was cast to lead a solo Black Adam development project. Sandberg signed on to direct Shazam! in February 2017, and Levi was cast that October, with Angel joining the following month. Principal photography began in Toronto on January 29, 2018, with most of the film shot at Pinewood Toronto Studios, and wrapped on May 11.",
            "Shazam! was released in the United States on April 5, 2019. The film was a box office success, grossing over $367 million worldwide, and received positive reviews from critics, who praised Sandberg's direction and the performances of Levi, Angel and Grazer, as well as its generally light tone and sense of fun. It was followed by the spin-off film Black Adam (2022) and a sequel titled Shazam! Fury of the Gods (2023), both of which failed to meet the critical and financial success of the first film."
        ]
    },
    {
        id: ACTION_MOVIE_NINE_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: spiderManImage,
        title: "Spider Man",
        releaseDate: "3 May 2002",
        description: [
            "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name, created by Stan Lee and Steve Ditko. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in Raimi's Spider-Man trilogy, produced by Columbia Pictures in association with Marvel Enterprises and Laura Ziskin Productions, and distributed by Sony Pictures Releasing. The film stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. The film chronicles Spider-Man's origin story and early superhero career. After being bitten by a genetically altered spider, teenager Peter Parker develops spider-like superhuman abilities and adopts a masked superhero identity to fight crime in New York City, facing the sinister Green Goblin in the process.",
            "Development on a live-action Spider-Man film began in 1975. Filmmakers Tobe Hooper, James Cameron, and Joseph Zito were all attached to direct the film at one point. However, the project would languish in development hell due to licensing and financial issues. After progress on the film stalled for nearly 25 years, it was licensed for a worldwide release by Columbia Pictures in 1999 after it acquired options from Metro-Goldwyn-Mayer (MGM) on all previous scripts developed by Cannon Films, Carolco, and New Cannon. Exercising its option on just two elements from the multi-script acquisition (a different screenplay was written by James Cameron, Ted Newsom, John Brancato, Barney Cohen, and Joseph Goldman), Sony hired Koepp to create a working screenplay (credited as Cameron's), and Koepp received sole credit in final billing. Directors Roland Emmerich, Ang Lee, Chris Columbus, Barry Sonnenfeld, Tim Burton, Michael Bay, Jan de Bont, M. Night Shyamalan, Tony Scott, and David Fincher were considered to direct the project before Raimi was hired as director in 2000. The Koepp script was rewritten by Scott Rosenberg during pre-production and received a dialogue polish from Alvin Sargent during production. Filming took place in Los Angeles and New York City from January to June 2001. Danny Elfman was hired to compose the film's score, while Sony Pictures Imageworks handled the film's visual effects.",
            "Spider-Man premiered at the Mann Village Theater on April 29, 2002, and was released in the United States on May 3. The film received positive reviews from critics and audiences, who praised Raimi's direction, the story, the performances, visual effects, action sequences, and musical score. It was the first film to reach $100 million in a single weekend, as well as the most successful film based on a comic book at the time. With a box office gross of over $825 million worldwide, it was the third highest-grossing film of 2002, the highest-grossing superhero film, and the sixth-highest-grossing film overall at the time of release. The film garnered nominations for Best Sound and Best Visual Effects at the 75th Academy Awards, among numerous other accolades. Spider-Man is credited for redefining the modern superhero genre, as well as the summer blockbuster. After the movie's success, the film received two sequels, Spider-Man 2 (2004) and Spider-Man 3 (2007). Maguire and Dafoe later reprised their roles in the Marvel Cinematic Universe (MCU) film Spider-Man: No Way Home (2021), which dealt with the concept of the multiverse and linked the Raimi trilogy to the MCU."
        ]
    },
    {
        id: ACTION_MOVIE_TEN_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: theMarvelsImage,
        title: "The Marvels",
        releaseDate: "10 November 2023",
        description: [
            "The Marvels is a 2023 American superhero film based on Marvel Comics. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to the film Captain Marvel (2019), a continuation of the television miniseries Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film was directed by Nia DaCosta, who co-wrote the screenplay with Megan McDonnell and Elissa Karasik. It stars Brie Larson as Carol Danvers / Captain Marvel, Teyonah Parris as Monica Rambeau, and Iman Vellani as Kamala Khan / Ms. Marvel, alongside Zawe Ashton, Gary Lewis, Park Seo-joon, Zenobia Shroff, Mohan Kapur, Saagar Shaikh, and Samuel L. Jackson. In the film, Danvers, Rambeau, and Kamala team up as 'the Marvels' after they begin swapping places with each other every time they use their powers.",
            "Marvel Studios confirmed plans to make a sequel to Captain Marvel in July 2019. Development began in January 2020 with McDonnell hired after working on the television miniseries WandaVision (2021). Larson was set to return from the first film as Danvers, and DaCosta was hired to direct that August. In December, Parris was revealed to be reprising her role as Rambeau from WandaVision alongside Vellani returning as Kamala from Ms. Marvel. Second unit filming began in mid-April 2021 in New Jersey, and the title—referring to the three characters and their similar abilities—was revealed in early May. Principal photography began in July 2021 and concluded by mid-May 2022, taking place at Pinewood Studios in Buckinghamshire and Longcross Studios in Surrey, England, as well as in Los Angeles and Tropea, Italy. Karasik's involvement was revealed during post-production.",
            "The Marvels premiered in Las Vegas on November 7, 2023, and was released in the United States on November 10 as part of Phase Five of the MCU. It received mixed reviews from critics, with praise for its performances but criticism for its script and tonal inconsistencies. The film underperformed at the box-office, grossing $206 million worldwide against a gross production budget of $274.8 million, making it the lowest-grossing film in the MCU and one of the few MCU films not to break even in its theatrical run."
        ]
    },
    {
        id: ACTION_MOVIE_ELEVEN_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: thorImage,
        title: "Thor",
        releaseDate: "6 May 2011",
        description: [
            "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the fourth film in the Marvel Cinematic Universe (MCU). It was directed by Kenneth Branagh, written by the writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and stars Chris Hemsworth as the title character alongside Natalie Portman, Tom Hiddleston, Stellan Skarsgård, Kat Dennings, Clark Gregg, Colm Feore, Ray Stevenson, Idris Elba, Jaimie Alexander, Rene Russo, and Anthony Hopkins. After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped of his powers and his hammer Mjölnir. As his brother Loki (Hiddleston) plots to take the Asgardian throne, Thor must prove himself worthy.",
            "Sam Raimi first developed the concept of a film adaptation based on Thor in 1991, but soon abandoned the project, leaving it in 'development hell' for several years. During this time, the rights were picked up by various film studios until Marvel signed Mark Protosevich to develop the project in 2006, and planned to finance and release it through Paramount. Matthew Vaughn was assigned to direct the film for a tentative 2010 release. However, after Vaughn was released from his holding deal in 2008, Branagh was approached and the film's release was rescheduled to 2011. The main characters were cast in 2009, and principal photography took place in California and New Mexico from January to May 2010. The film was converted to 3D in post-production.",
            "Thor premiered in Sydney on April 17, 2011, and was released in the United States on May 6, as part of Phase One of the MCU. It received generally positive reviews from critics and was a financial success, earning $449.3 million worldwide. Three sequels have been released: Thor: The Dark World (2013), Thor: Ragnarok (2017), and Thor: Love and Thunder (2022)."
        ]
    },
    {
        id: ACTION_MOVIE_TWELVE_ID,
        category: ACTION_MOVIE_CATEGORY,
        image: wonderWomanImage,
        title: "Wonder Woman",
        releaseDate: "2 June 2017",
        description: [
            "Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, DC Films, Atlas Entertainment, and Cruel and Unusual Films, and distributed by Warner Brothers. It is the fourth installment of the DC Extended Universe (DCEU), and a prequel/spin-off to Batman v Superman: Dawn of Justice (2016). The film was directed by Patty Jenkins and written by Allan Heinberg, based on a story conceived by Heinberg, Zack Snyder, and Jason Fuchs. The film stars Gal Gadot in the title role, alongside Chris Pine, Robin Wright, Danny Huston, David Thewlis, Connie Nielsen, and Elena Anaya. It is the second live action theatrical film featuring Wonder Woman following her debut in Batman v Superman: Dawn of Justice. In Wonder Woman, the Amazon princess Diana sets out to stop World War I, believing the conflict was started by the longtime enemy of the Amazons, Ares, after American pilot and spy Steve Trevor crash-lands on their island Themyscira and informs her about it.",
            "Development of a live-action Wonder Woman film began in 1996, with Ivan Reitman to produce and possibly direct. The project floundered in development hell for many years; Jon Cohen, Todd Alcott and Joss Whedon, among others, were also attached to the project at various points. Warner Bros. announced the film in 2010 and Jenkins signed on to direct in 2015. Inspiration for Wonder Woman was drawn from Wonder Woman creator William Moulton Marston's 1940s stories and George Pérez's 1980s stories about Wonder Woman, as well as the New 52 incarnation of the character. Principal photography began on November 21, 2015, with filming taking place in the United Kingdom, France and Italy before finishing on May 9, 2016. Additional filming took place in November 2016.",
            "Wonder Woman had its world premiere at the Pantages Theatre in Hollywood on May 26, 2017, and was theatrically released worldwide on June 2, 2017, by Warner Bros. Pictures. The film received positive reviews, being noted for its cultural significance, with praise for its direction, performances, visuals, story, action sequences, and musical score, though some criticism was directed towards the climax. It grossed over $822 million worldwide, making it the tenth highest-grossing film of 2017 and was the highest-grossing film by a solo female director until it was overtaken by Hi, Mom. The American Film Institute selected it as one of the top ten films of 2017 and it won the Hugo Award for Best Dramatic Presentation in 2018. A sequel, Wonder Woman 1984, was released in December 2020, with Jenkins returning as director and Gadot, Pine, Wright and Nielsen reprising their roles. A third film was planned, but was cancelled due to DC Films being restructured as DC Studios in 2022."
        ]
    }
]





export const CARTOON_MOVIES_TITLE = "Cartoon"

export const CARTOON_MOVIE_CATEGORY = "cartoon"

export const CARTOON_MOVIE_ONE_ID = "angry_birds"
export const CARTOON_MOVIE_TWO_ID = "fairly_odd_parents"
export const CARTOON_MOVIE_THREE_ID = "jimmy_neutron"
export const CARTOON_MOVIE_FOUR_ID = "johnny_bravo"
export const CARTOON_MOVIE_FIVE_ID = "lady_bug"
export const CARTOON_MOVIE_SIX_ID = "nimona"
export const CARTOON_MOVIE_SEVEN_ID = "peter_pan"
export const CARTOON_MOVIE_EIGHT_ID = "sanjay_and_craig"
export const CARTOON_MOVIE_NINE_ID = "sponge_bob"
export const CARTOON_MOVIE_TEN_ID = "super_mario"
export const CARTOON_MOVIE_ELEVEN_ID = "the_power_puff_girls"
export const CARTOON_MOVIE_TWELVE_ID = "tom_and_jerry"

export const CARTOON_MOVIE_IDS = [
    CARTOON_MOVIE_ONE_ID,
    CARTOON_MOVIE_TWO_ID,
    CARTOON_MOVIE_THREE_ID,
    CARTOON_MOVIE_FOUR_ID,
    CARTOON_MOVIE_FIVE_ID,
    CARTOON_MOVIE_SIX_ID,
    CARTOON_MOVIE_SEVEN_ID,
    CARTOON_MOVIE_EIGHT_ID,
    CARTOON_MOVIE_NINE_ID,
    CARTOON_MOVIE_TEN_ID,
    CARTOON_MOVIE_ELEVEN_ID,
    CARTOON_MOVIE_TWELVE_ID,
    
]

export const CARTOON_MOVIES = [
    {
        id: CARTOON_MOVIE_ONE_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: angryBirdsImage,
        title: "Angry Birds",
        releaseDate: "20 May 2016",
        description: [
            "The Angry Birds Movie (also known simply as Angry Birds) is a 2016 animated comedy film based on Rovio Entertainment's video game series of the same name, produced by Columbia Pictures and Rovio Animation, and distributed by Sony Pictures Releasing. The film was directed by Clay Kaytis and Fergal Reilly (in their feature directorial debuts) from a screenplay written by Jon Vitti and a story by Mikael Hed, Mikko Pöllä, and co-producer John Cohen. It stars the voices of Jason Sudeikis, Josh Gad, Danny McBride, Maya Rudolph, Kate McKinnon, Sean Penn, Tony Hale, Keegan-Michael Key, Bill Hader, and Peter Dinklage. The film follows Red (Sudeikis), an outcast in an island of anthropomorphic flightless birds, as he suspects a newly arrived crew of pigs led by Leonard (Hader) of plotting an evil plan, and attempts to put a stop to them with the help of his newfound friends Chuck (Gad) and Bomb (McBride).",
            "After the success of the Angry Birds Toons webseries, Rovio subsequently began development on an adaptation of the Angry Birds video game series, and would proceed to make a proper announcement in December 2012. The first image from the film was revealed in October 2014, with Sudeikis, Gad, McBride, Hader, Rudolph, and Dinklage revealed to be part of its cast at the same time. Rovio and Sony Pictures announced that they would spend roughly €100 million for the marketing and distribution of The Angry Birds Movie, surpassing the €8.5 million budget of Big Game (2014) to become the most expensive Finnish-produced film up to that point. Sony Pictures Imageworks was responsible for handling animation services for the film.",
            "The Angry Birds Movie was released in the United States and Canada on May 20, 2016. The film received overall mixed reviews from critics and grossed $352 million worldwide. A sequel, The Angry Birds Movie 2, was released on August 14, 2019, co-produced by Sony Pictures Animation, who were not involved with this film."
        ]
    },
    {
        id: CARTOON_MOVIE_TWO_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: fairlyOddParentsImage,
        title: "Fairly Odd Parents",
        releaseDate: "30 March 2001",
        description: [
            "The Fairly OddParents is an American animated television series created by Butch Hartman for Nickelodeon. The series follows the adventures of Timmy Turner, a 10-year-old boy with two fairy godparents named Cosmo and Wanda who grant him wishes to solve his everyday problems.",
            "The series originated from shorts on Nickelodeon's animation showcase Oh Yeah! Cartoons that aired from 1998 to 2002. Due to their popularity, the shorts were later green-lit to become a half-hour series, which premiered on March 30, 2001. Originally, it ended on November 25, 2006, totaling five seasons and 80 episodes, but revived in 2008. Production of the series ceased again after Hartman left Nickelodeon in February 2018. It is Nickelodeon's second longest-running animated show, behind SpongeBob SquarePants (1999–present).",
            "On February 24, 2021, it was announced that a spin-off live-action series was in development for Paramount+. The series The Fairly OddParents: Fairly Odder premiered on March 31, 2022. A sequel series, titled The Fairly OddParents: A New Wish, is also in development impending for a Netflix release."
        ]
    },
    {
        id: CARTOON_MOVIE_THREE_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: jimmyNeutronImage,
        title: "Jimmy Neutron",
        releaseDate: "22 March 2002",
        description: [
            "James Isaac Neutron is the titular and main character from the film Jimmy Neutron: Boy Genius and its spin-off Nickelodeon animated television series The Adventures of Jimmy Neutron, Boy Genius. Created by showrunner John A. Davis, he has been voiced by Debi Derryberry since the test pilot premiered in 1998.",
            "The character originated in the 1980s, created by Davis and series co-creator Keith Alcorn under the name of Johnny Quasar, and was developed in a 13-minute long short film pitched to SIGGRAPH sometime in 1997, and with production beginning in that year. However, since the name sounded similar to Jonny Quest, Davis brain-stormed various other monikers before coming up with the current name. Characterized by his distinctive gravity-defying hairstyle and ridiculously high IQ of 210, Neutron is an aerospace engineer, physicist, astronaut/astronomer, biochemist, computer programmer, and architect. He is considered one of the most intelligent people in Retroville and possibly the show's universe. Throughout the series, he is often seen with his companion, a silver-gray robot dog named Goddard and a rocket ship nicknamed the Strato XL which he uses in the opening sequence, both of which he invented. Furthermore, Neutron has a perennial rivalry with Cindy Vortex, who calls him 'Nerd-tron' throughout the show."
        ]
    },
    {
        id: CARTOON_MOVIE_FOUR_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: johnnyBravoImage,
        title: "Johnny Bravo",
        releaseDate: "14 July 1997",
        description: [
            "Johnny Bravo is an American animated comedy television series created by Van Partible for Cartoon Network and distributed by Warner Bros. Domestic Television Distribution. The second of the network's Cartoon Cartoons (after Dexter's Laboratory), it aired from July 14, 1997, to August 27, 2004. The titular Johnny Bravo (voiced by Jeff Bennett), who is loosely based on Elvis Presley and James Dean, is a blonde-haired sunglasses-wearing, muscular, and dimwitted young man who lives with his mother and attempts to get women to date him, though he always falls short because of his actions. He ends up in bizarre situations and predicaments, often accompanied by celebrity guest characters such as Donny Osmond or Adam West. Throughout its run, the show was known for its adult humor and pop culture references.",
            "Partible pitched the series to Hanna-Barbera's animation showcase What a Cartoon!, basing it on his senior thesis project he produced while attending Loyola Marymount University. A pilot short aired on Cartoon Network in 1995. The series was renewed for a second season in 1999, during which Partible left, and the show was retooled under the direction of Kirk Tingblad. In 2003, for the series' fourth season, Partible returned and restored the show to its original format and style. In its four seasons, a total of 67 episodes have aired. The first three seasons were produced by Hanna-Barbera Cartoons, while the fourth season was produced by Cartoon Network Studios.",
            "Johnny Bravo was nominated for four Annie Awards, one YoungStar Award, and two Golden Reel Awards. The series helped launch the careers of several animators, including Seth MacFarlane and Butch Hartman. Spin-off media include comic books, DVD and VHS releases, collectible toys, T-shirts with Johnny's well known phrase 'Whoa Mama', and video games."
        ]
    },
    {
        id: CARTOON_MOVIE_FIVE_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: ladyBugImage,
        title: "Lady Bug",
        releaseDate: "19 October 2015",
        description: [
            "Miraculous: Tales of Ladybug & Cat Noir (French: Miraculous, les aventures de Ladybug et Chat Noir; commonly abbreviated as Miraculous Ladybug or simply Miraculous) is a 2015 French animated magical girl superhero television series created by Thomas Astruc and developed by Jeremy Zag. The series is produced by French companies Zagtoon and Method Animation and co-produced with Japanese studio Toei Animation's European division, and several international companies.",
            "The series focuses on two Parisian teenagers, Marinette Dupain-Cheng and Adrien Agreste, who transform into the superheroes Ladybug and Cat Noir, respectively, to protect the city from supervillains.",
            "Prior to its debut in France on 19 October 2015 on TF1's TFOU block, the series was first shown in South Korea on 1 September 2015 on EBS1. Internationally, it is mainly broadcast on Disney-owned channels or on Disney+, with exceptions in some countries.",
            "The series spawned a media franchise with several products tied to it, including various comic books, novels, and video games. A film adaptation, Ladybug & Cat Noir: The Movie, was released theatrically in 2023 in France."
        ]
    },
    {
        id: CARTOON_MOVIE_SIX_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: nimonaImage,
        title: "Nimona",
        releaseDate: "23 June 2023",
        description: [
            "Nimona is a 2023 American animated science fantasy film directed by Nick Bruno and Troy Quane from a screenplay by Robert L. Baird and Lloyd Taylor. It is based on the 2015 graphic novel of the same name by ND Stevenson. Set in a science fantasy world influenced by the Middle Ages, the film features the voices of Chloë Grace Moretz as the eponymous shapeshifting character and Riz Ahmed as her boss and former knight Ballister, with Eugene Lee Yang and Frances Conroy voicing supporting roles.",
            "Originally a production of Blue Sky Studios, it was set to be directed by Patrick Osborne, with an initial release date of 2020. Following the Walt Disney Company's acquisition of 21st Century Fox, the parent company of Blue Sky, it was delayed multiple times before being canceled due to Blue Sky's closure in April 2021. However, Annapurna Pictures revived the project the following year, with Bruno and Quane announced as directors, DNEG Animation providing animation, and Netflix acquiring worldwide distribution. Christophe Beck was hired to compose the film's rock-inspired score.",
            "Nimona had its world premiere at the Annecy International Animation Film Festival on June 14, 2023, was released in select cinemas on June 23, and made its streaming debut on June 30. The film received positive reviews from critics, who praised its animation, musical score, characters, themes, tone, humor, writing, and vocal performances (particularly those of Moretz and Ahmed). The film was nominated for Best Animated Feature at several awards, including at the Critics' Choice, Annie Awards and Academy Awards, losing to The Boy and the Heron."
        ]
    },
    {
        id: CARTOON_MOVIE_SEVEN_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: peterPanImage,
        title: "Peter Pan",
        releaseDate: "5 February 1953",
        description: [
            "Peter Pan is a 1953 American animated adventure fantasy film produced in 1952 by Walt Disney Productions and released by RKO Radio Pictures. Based on J. M. Barrie's 1904 play Peter Pan, or the Boy Who Wouldn't Grow Up, the film was directed by Hamilton Luske, Clyde Geronimi, and Wilfred Jackson. Featuring the voices of Bobby Driscoll, Kathryn Beaumont, Hans Conried, and Bill Thompson, the film's plot follows Wendy Darling and her two brothers, who meet the never-growing-up Peter Pan and travel with him to the island of Never Land to stay young, where they also have to face Peter's archenemy, Captain Hook.",
            "In 1935, Walt Disney began considering plans to adapt Barrie's play into an animated feature. He purchased the film rights from Paramount Pictures in 1938, and began preliminary development in the next year. However, following the attack on Pearl Harbor, Disney shelved the project when his studio was contracted by the United States government to produce training and war propaganda films. The project sat idle in development for the rest of the decade until it experienced a turnaround in 1949. To assist the animators, live-action reference footage was shot with actors on soundstages. It also marked the last Disney film in which all nine members of Disney's Nine Old Men worked together as directing animators.",
            "Peter Pan was released on February 5, 1953, becoming the final Disney animated feature released through RKO before Disney founded his own distribution company. The film was entered into the 1953 Cannes Film Festival, Upon its release, the film earned positive reviews from film critics and was a box office success. Its representation of the Native Americans received retrospective criticism.",
            "A sequel, titled Return to Never Land, was released in 2002, and a series of direct-to-DVD prequels focusing on Tinker Bell began in 2008. A live-action adaptation of the film was released on Disney+ in 2023."
        ]
    },
    {
        id: CARTOON_MOVIE_EIGHT_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: sanjayAndCraigImage,
        title: "Sanjay And Craig",
        releaseDate: "25 May 2013",
        description: [
            "Sanjay and Craig is an American animated sitcom created by Jim Dirschberger, Jay Howell, and Andreas Trolf for Nickelodeon. Produced by Will McRobb and Chris Viscardi, the series revolves around Sanjay, voiced by Maulik Pancholy, and his best friend Craig, voiced by Chris Hardwick, a talking snake.",
            "The series was first pitched in 2009 and officially began production in June 2012, a few months after the pilot was completed. The series first aired on Nickelodeon on May 25, 2013. The series was renewed for a second season on September 12, 2013, that began airing on July 12, 2014, and for a third season on June 11, 2014, that premiered on September 7, 2015. Hardwick confirmed on Twitter on June 10, 2016, that the series had officially finished production. The series ended on July 29, 2016, with the half-hour special episode 'Booyah for Bollywood', having aired three seasons and 60 episodes."
        ]
    },
    {
        id: CARTOON_MOVIE_NINE_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: spongeBobImage,
        title: "Sponge Bob",
        releaseDate: "4 March 2021",
        description: [
            "The SpongeBob Movie: Sponge on the Run is a 2020 American live-action/animated adventure comedy film based on the animated television series SpongeBob SquarePants. Written and directed by series co-developer and former writer Tim Hill, who co-wrote the story with Jonathan Aibel and Glenn Berger, It is the third theatrical film based on the series, following the first in 2004 and second in 2015, and the first film in the franchise to be fully animated in stylized computer-generated imagery (as opposed to being entirely animated in 2D like the first film, or mixing 2D and CGI animation together like in the second film). The regular voice cast of the series reprise their respective roles from the series and the previous films and including new characters (both live-action and animated) performed by Awkwafina, Snoop Dogg, Tiffany Haddish, Keanu Reeves, Danny Trejo, and Reggie Watts. The film follows the origin of how SpongeBob met Gary the Snail, and SpongeBob's quest to rescue his pet after he is kidnapped. The film is dedicated to creator Stephen Hillenburg, who died in 2018, and also served as an executive producer on the project.",
            "Development for a third SpongeBob film began in April 2015, two months after the release of Sponge Out of Water. By January 2016, Aibel and Berger had been hired to write the film, and by April 2018, Hill was onboard as director. Hans Zimmer composed the film's musical score.",
            "The film was produced by Paramount Animation, Nickelodeon Movies, and United Plankton Pictures, with animation provided by Mikros Image. Originally slated for a worldwide theatrical release by Paramount Pictures, plans were changed due to the COVID-19 pandemic. The film was released theatrically in Canada on August 14, 2020, and digitally on Netflix in other territories on November 5, 2020. It was released as a premium video-on-demand offering and a Paramount+ launch title in the United States on March 4, 2021. Sponge on the Run received generally positive reviews from critics, with praise for the animation and loyalty to the series. The film was nominated for Favorite Animated Movie at the 2022 Kids' Choice Awards, but lost to Encanto. A fourth film, The SpongeBob Movie: Search for SquarePants, is currently in development with a release date of December 19, 2025."
        ]
    },
    {
        id: CARTOON_MOVIE_TEN_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: superMarioImage,
        title: "Super Mario",
        releaseDate: "5 April 2023",
        description: [
            "The Super Mario Bros. Movie is a 2023 American animated adventure comedy film based on Nintendo's Mario video game franchise. Produced by Universal Pictures, Illumination, and Nintendo, and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic and written by Matthew Fogel. The ensemble voice cast includes Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, and Fred Armisen. The film features an origin story for the brothers Mario and Luigi, Italian-American plumbers who are separated after being transported to a fantasy world and become entangled in a battle between the Mushroom Kingdom, led by Princess Peach, and the Koopas, led by Bowser.",
            "After the critical and commercial failure of the live-action film Super Mario Bros. (1993), Nintendo became reluctant to license its intellectual properties for film adaptations. Mario creator Shigeru Miyamoto became interested in developing another film during the development of the Virtual Console service. Through Nintendo's work with Universal Parks & Resorts to create Super Nintendo World, he met with Illumination CEO Chris Meledandri. By 2016, they were discussing a Mario film and, in January 2018, Nintendo announced that it would produce it with Illumination and Universal. Production was underway by 2020, and the cast was announced in September 2021.",
            "The Super Mario Bros. Movie premiered at Regal LA Live in Los Angeles on April 1, 2023, and was released in the United States on April 5. Although it received mixed reviews from critics, the film grossed $1.36 billion worldwide and broke multiple box-office records, including the biggest worldwide opening weekend for an animated film, the highest grossing film based on a video game, and the first film based on a video game to gross over $1 billion. It also became the second-highest-grossing film of 2023, the third-highest-grossing animated film, and the highest-grossing film produced by Illumination. At the 81st Golden Globe Awards, the film received three nominations, including Best Animated Feature Film. A sequel is set to be released on April 3, 2026."
        ]
    },
    {
        id: CARTOON_MOVIE_ELEVEN_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: thePowerPuffGirlsImage,
        title: "The Power Puff Girls",
        releaseDate: "18 Novemeber 1998",
        description: [
            "The Powerpuff Girls is an American superhero animated television series created by animator Craig McCracken and produced by Hanna-Barbera (later Cartoon Network Studios) for Cartoon Network. The show centers on Blossom, Bubbles, and Buttercup, three kindergarten-aged girls with superpowers. They live in the fictional city of Townsville with their father and creator, a scientist named Professor Utonium, and are frequently called upon by the city's mayor to help fight nearby criminals and other enemies using their powers.",
            "While attending his second year at CalArts in 1992, McCracken created a short film, Whoopass Stew!, about a trio of child superheroes known as the Whoopass Girls, which was only shown at festivals. Following the name change to The Powerpuff Girls, McCracken submitted his student film to Cartoon Network, who aired the series' refined pilot, 'Meat Fuzzy Lumpkins', in its animation showcase program World Premiere Toons on February 20, 1995, along with its follow-up, 'Crime 101', on January 28, 1996. Network executives gave McCracken the greenlight for a full series, which debuted as a Cartoon Cartoon on November 18, 1998.",
            "The Powerpuff Girls aired on Cartoon Network for six seasons, three specials, and a feature film, with the final episode airing on March 25, 2005. A total of 78 episodes were produced, in addition to the two pilots, a Christmas special, the film, a tenth anniversary special, and a special episode in computer animation. Various spin-off media include an anime, three CD soundtracks, a home video collection, comic books, a series of video games, a 2016 reboot series, and an upcoming second reboot, as well as various licensed merchandise. The series has been nominated for six Emmy Awards, nine Annie Awards, and a Kids' Choice Award during its run."
        ]
    },
    {
        id: CARTOON_MOVIE_TWELVE_ID,
        category: CARTOON_MOVIE_CATEGORY,
        image: tomAndJerryImage,
        title: "Tom And Jerry",
        releaseDate: "30 July 1993",
        description: [
            "Tom and Jerry: The Movie is a 1992 American animated musical comedy film based on the characters Tom and Jerry created by William Hanna and Joseph Barbera. It was produced and directed by Phil Roman, with a screenplay written by Dennis Marks, who also scripted some episodes of the then-airing Tom & Jerry Kids television series. The film-stars the voices of Richard Kind, Dana Hill, Anndi McAfee, Tony Jay, Rip Taylor, Henry Gibson, Michael Bell, Ed Gilbert, David L. Lander, Howard Morris, and Charlotte Rae.",
            "It is the first theatrical feature-length animated film featuring the titular characters, as well as the first piece of theatrically released of Tom and Jerry media in 25 years. Although largely mute in the original cartoons, Tom and Jerry are given extensive spoken dialogue for the only time to date. Joseph Barbera, co-founder of Hanna-Barbera Productions and co-creator of the original Tom and Jerry short films, served as the film's creative consultant. The film tells the story about an eight-year-old girl named Robyn Starling, who enlists Tom and Jerry's help to escape from her abusive aunt and reunite with her lost and presumed-dead father.",
            "Following its premiere in Germany on October 1, 1992, Tom and Jerry: The Movie was released theatrically in the United States on July 30, 1993, by Miramax Films. The film underperformed at the box office, earning $3.6 million on a 3.5 million budget, and The film received generally negative reviews from critics, audiences, and fans of the franchise, for its screenplay, direction, musical numbers, and unfaithfulness to the source material, while some praised the animation style, voice acting, and Henry Mancini's musical score."
        ]
    }
]













export const OTHERS_MOVIES_TITLE = "Others"

export const OTHERS_MOVIE_CATEGORY = "others"

export const OTHERS_MOVIE_ONE_ID = "barbie"
export const OTHERS_MOVIE_TWO_ID = "beautiful_disaster"
export const OTHERS_MOVIE_THREE_ID = "fear_street_1"
export const OTHERS_MOVIE_FOUR_ID = "fear_street_2"
export const OTHERS_MOVIE_FIVE_ID = "fear_street_3"
export const OTHERS_MOVIE_SIX_ID = "ghosted"
export const OTHERS_MOVIE_SEVEN_ID = "joy_ride"
export const OTHERS_MOVIE_EIGHT_ID = "love_again"
export const OTHERS_MOVIE_NINE_ID = "no_hard_feelings"
export const OTHERS_MOVIE_TEN_ID = "peter_pan"
export const OTHERS_MOVIE_ELEVEN_ID = "the_last_air_bender"
export const OTHERS_MOVIE_TWELVE_ID = "the_tiger_apprentice"

export const OTHERS_MOVIE_IDS = [
    OTHERS_MOVIE_ONE_ID,
    OTHERS_MOVIE_TWO_ID,
    OTHERS_MOVIE_THREE_ID,
    OTHERS_MOVIE_FOUR_ID,
    OTHERS_MOVIE_FIVE_ID,
    OTHERS_MOVIE_SIX_ID,
    OTHERS_MOVIE_SEVEN_ID,
    OTHERS_MOVIE_EIGHT_ID,
    OTHERS_MOVIE_NINE_ID,
    OTHERS_MOVIE_TEN_ID,
    OTHERS_MOVIE_ELEVEN_ID,
    OTHERS_MOVIE_TWELVE_ID,
    
]

export const OTHERS_MOVIES = [
    {
        id: OTHERS_MOVIE_ONE_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: barbieImage,
        title: "Barbie",
        releaseDate: "21 July 2023",
        description: [
            "Barbie is a 2023 fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the eponymous fashion dolls by Mattel, it is the first live-action Barbie film after numerous animated films and specials. It stars Margot Robbie as the title character and Ryan Gosling as Ken, and follows them on a journey of self-discovery through both Barbieland and the real world following an existential crisis. It is also a commentary regarding patriarchy and the effects of feminism. The supporting cast includes America Ferrera, Michael Cera, Kate McKinnon, Issa Rae, Rhea Perlman, and Will Ferrell.",
            "A live-action Barbie film was announced in September 2009 by Universal Pictures with Laurence Mark producing. Development began in April 2014, when Sony Pictures acquired the film rights. Following multiple writer and director changes and the casting of Amy Schumer and later Anne Hathaway as Barbie, the rights were transferred to Warner Bros. Pictures in October 2018. Robbie was cast in 2019, after Gal Gadot turned down the role due to scheduling conflicts, and Gerwig was announced as director and co-writer with Baumbach in 2020. The rest of the cast was announced in early 2022. Principal photography occurred primarily at Warner Bros. Studios, Leavesden, England, and at the Venice Beach Skatepark in Los Angeles from March to July 2022.",
            "Barbie premiered at the Shrine Auditorium in Los Angeles on July 9, 2023, and was released in the United States on July 21. Its concurrent release with Universal Pictures' Oppenheimer was the catalyst of the 'Barbenheimer' phenomenon, encouraging audiences to see both films as a double feature. The film grossed $1.446 billion and achieved several milestones, including the highest-grossing film of 2023 and the 14th highest-grossing film of all time. Named one of the top 10 films of 2023 by the National Board of Review and the American Film Institute, it received critical acclaim and other accolades, including eight Academy Award nominations (among them Best Picture), winning Best Original Song for 'What Was I Made For?'; the song also won Golden Globe Award for Best Original Song while Barbie was awarded Golden Globe Award for Cinematic and Box Office Achievement."
        ]
    },
    {
        id: OTHERS_MOVIE_TWO_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: beautifulDisasterImage,
        title: "Beautiful Disaster",
        releaseDate: "12 April 2023",
        description: [
            "Beautiful Disaster is a 2023 American romantic comedy drama film directed and written by Roger Kumble. Based on Jamie McGuire's 2011 novel, the film follows Abby, a college freshman, in hopes to reinvent herself while trying to resist her attraction to bad boy, Travis.",
            "The film was released in theaters on April 12, 2023, and was released digitally on May 2, 2023. A sequel, Beautiful Wedding was released in theaters on January 24, 2024."
        ]
    },
    {
        id: OTHERS_MOVIE_THREE_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: fearStreetOneImage,
        title: "Fear Street 1",
        releaseDate: "2 July 2021",
        description: [
            "Fear Street Part One: 1994 (titled onscreen as Fear Street 1994) is a 2021 American supernatural slasher film directed by Leigh Janiak, with a script co-written by Phil Graziadei, and Janiak, from an original story by Kyle Killen, Graziadei, and Janiak. Based on the book series of the same name by R. L. Stine, it is the first installment in the Fear Street trilogy and stars Kiana Madeira, Olivia Scott Welch, Benjamin Flores Jr., Julia Rehwald, Fred Hechinger, Ashley Zukerman, Darrell Britt-Gibson, and Maya Hawke. The film follows a teen and her friends after a series of brutal slayings, as they take on an evil force that's plagued their notorious town for centuries.",
            "Development of a film based on Fear Street began in 1997 when Hollywood Pictures acquired the rights to the series but the project never materialized. The project re-entered development at 20th Century Fox in 2015, with Janiak hired to direct and rewrite Killen's script with Graziadei in 2017. Produced by Chernin Entertainment, filming for the trilogy took place back-to-back from March to September 2019 in Georgia with the film set for a theatrical release in June 2020. However, the trilogy was pulled from the schedule because of the COVID-19 pandemic. Following the acquisition of 21st Century Fox by Disney, Chernin Entertainment ended their distribution deal with 20th Century Studios and gave distribution rights to Netflix in August 2020.",
            "Fear Street Part One: 1994 premiered at the Los Angeles State Historic Park on June 28, 2021, and was released on Netflix on July 2, 2021, with the other entries, Part Two: 1978 and Part Three: 1666, released weekly. The film received generally positive reviews from critics, who praised the performances of the cast, the horror elements and faithfulness to the source material."
        ]
    },
    {
        id: OTHERS_MOVIE_FOUR_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: fearStreetTwoImage,
        title: "Fear Street 2",
        releaseDate: "8 July 2021",
        description: [
            "Fear Street Part Two: 1978 (titled onscreen as Fear Street 1978) is a 2021 American teen supernatural slasher film directed by Leigh Janiak, with a script co-written by Janiak, and Zak Olkewicz, from an original story by Janiak, Olkewicz, and Phil Graziadei. Based on the book series of the same name by R. L. Stine, it is the second installment in the Fear Street trilogy after Part One: 1994 and stars Sadie Sink, Emily Rudd, Ryan Simpkins, McCabe Slye, Ted Sutherland, Gillian Jacobs, Kiana Madeira, Benjamin Flores Jr., and Olivia Scott Welch. The film centers on the cursed town of Shadyside, a killer's murder spree terrorizes Camp Nightwing and turns a summer of fun into a gruesome fight for survival.",
            "Produced by Chernin Entertainment, a film adaptation of Fear Street began development at 20th Century Fox in 2015, with Janiak hired in 2017. Filming for the trilogy took place back-to-back from March to September 2019 in Georgia, with the intention of a theatrical release beginning June 2020. However, due to the COVID-19 pandemic and the acquisition of 21st Century Fox by Disney, Chernin Entertainment ended their distribution deal with 20th Century Studios and sold rights to Netflix in August 2020.",
            "Fear Street Part Two: 1978 premiered at the Los Angeles State Historic Park on July 8, 2021, and was released by Netflix on July 9, 2021. The film received generally positive reviews from critics, who praised the screenplay, direction and the performances of Sink, Rudd, and Simpkins. The final installment in the trilogy, Part Three: 1666, was released on July 16."
        ]
    },
    {
        id: OTHERS_MOVIE_FIVE_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: fearStreetThreeImage,
        title: "Fear Street 3",
        releaseDate: "16 July 2021",
        description: [
            "Fear Street Part Three: 1666 (titled onscreen as Fear Street 1666 for its first half and Fear Street 1994: Part 2 for its second half) is a 2021 American supernatural horror film directed by Leigh Janiak, who co-wrote the screenplay with Phil Graziadei, and Kate Trefry. Based on the book series of the same name by R. L. Stine, it is the third and final installment of the Fear Street trilogy after Part One: 1994 and Part Two: 1978 and stars Kiana Madeira, Ashley Zukerman, Gillian Jacobs, Olivia Scott Welch, Benjamin Flores Jr., and Darrell Britt-Gibson. The film follows the origins of Shadyside's curse in the mid-17th century and the survivors in 1994 who try to put an end to it.",
            "Produced by Chernin Entertainment, a film adaptation of Fear Street began development at 20th Century Fox in 2015, with Janiak hired in 2017. Filming for the trilogy took place back-to-back from March to September 2019 in Georgia, with the intention of a theatrical release in June 2020. However, due to the COVID-19 pandemic and the acquisition of 21st Century Fox by Disney, Chernin Entertainment ended their distribution deal with 20th Century Studios and sold rights to Netflix in August 2020.",
            "Fear Street Part Three: 1666 premiered at the Los Angeles State Historic Park on July 14, 2021 and was released by Netflix on July 16, 2021. It received generally positive reviews from critics, who described the film as an effective conclusion to the trilogy."
        ]
    },
    {
        id: OTHERS_MOVIE_SIX_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: ghostedImage,
        title: "Ghosted",
        releaseDate: "21 April 2023",
        description: [
            "Ghosted is a 2023 American romantic action-adventure comedy film directed by Dexter Fletcher and written by the writing teams of Rhett Reese and Paul Wernick, and Chris McKenna and Erik Sommers, from a story by Reese and Wernick. The film stars Chris Evans and Ana de Armas.",
            "Produced by Apple Studios and Skydance Media, it was released by Apple TV+ on April 21, 2023. Despite receiving generally negative reviews from critics, it became Apple TV+'s most watched film debut."
        ]
    },
    {
        id: OTHERS_MOVIE_SEVEN_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: joyRideImage,
        title: "Joy Ride",
        releaseDate: "17 March 2023",
        description: [
            "Joy Ride is a 2023 American comedy film directed by Adele Lim, in her feature directorial debut, and written by Cherry Chevapravatdumrong and Teresa Hsiao, from a story by Lim, Chevapravatdumrong, and Hsiao. The film stars Ashley Park, Sherry Cola, Stephanie Hsu, and Sabrina Wu, with Ronny Chieng, Meredith Hagner, David Denman, Annie Mumolo, Timothy Simons, and Daniel Dae Kim appearing in supporting roles.",
            "The film was announced in 2018 following the partnership deal between Point Grey Pictures and Lionsgate, with Lim being confirmed as director in 2021. The cast was announced between August and October of the same year, and filming took place in British Columbia throughout the latter month.",
            "Joy Ride had its world premiere at SXSW on March 17, 2023, and was released in the United States on July 7, 2023, by Lionsgate Films. The film received positive reviews from critics, who praised the lead performances and humor."
        ]
    },
    {
        id: OTHERS_MOVIE_EIGHT_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: loveAgainImage,
        title: "Love Again",
        releaseDate: "5 May 2023",
        description: [
            "Love Again is a 2023 American romantic comedy-drama film written and directed by James C. Strouse. It is an English-language remake of the 2016 German film SMS für Dich, itself based on a novel by Sofie Cramer. The film stars Priyanka Chopra Jonas, Sam Heughan, and Celine Dion, in her first feature film, portraying a fictionalized version of herself.",
            "Love Again was released in the United States on May 5, 2023, by Sony Pictures Releasing."
        ]
    },
    {
        id: OTHERS_MOVIE_NINE_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: noHardFeelingsImage,
        title: "No Hard Feelings",
        releaseDate: "23 June 2023",
        description: [
            "No Hard Feelings is a 2023 American sex comedy film starring Jennifer Lawrence as a woman who is hired by a wealthy couple to romance their romantically and sexually inexperienced son, played by Andrew Barth Feldman. The film is directed by Gene Stupnitsky from a screenplay he co-wrote with John Phillips. Along with Lawrence—who was one of the film's producers—and Feldman, the film stars Laura Benanti, Natalie Morales, and Matthew Broderick.",
            "The project was announced in October 2021, when Sony Pictures Releasing and Columbia Pictures won a bidding war between Apple Original Films, Netflix and Universal Pictures. Lawrence joined the cast and produced the film with Stupnitsky attached to direct it. Much of the cast joined in September to October 2022. Filming began in late September in various Nassau County locations in the New York City metropolitan area, before finishing the following November.",
            "No Hard Feelings was theatrically released in the United States on June 23, 2023, by Sony Pictures Releasing. It received positive reviews from critics and grossed over $87 million worldwide against a $45 million budget. Lawrence earned a nomination for Best Actress in a Motion Picture – Comedy or Musical at the 81st Golden Globe Awards, and won the Comedy Movie Star of the Year award at the 49th People's Choice Awards. The film was nominated for Best Comedy at the 29th Critics' Choice Awards."
        ]
    },
    {
        id: OTHERS_MOVIE_TEN_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: peterPanFilmImage,
        title: "Peter Pan",
        releaseDate: "25 December 2003",
        description: [
            "Peter Pan is a 2003 fantasy adventure film directed by P. J. Hogan and written by Hogan and Michael Goldenberg. The screenplay is based on the 1904 play and 1911 novel Peter Pan, or The Boy Who Wouldn't Grow Up by J.M. Barrie. Jason Isaacs plays the dual roles of Captain Hook and George Darling, Olivia Williams plays Mary Darling, while Jeremy Sumpter plays Peter Pan, Rachel Hurd-Wood plays Wendy Darling, and Ludivine Sagnier plays Tinker Bell. Lynn Redgrave plays a supporting role as Aunt Millicent, a new character created for the film.",
            "After completing the script, Hogan and Goldenberg were given approval by Great Ormond Street Hospital, which held the rights to Barrie's story. Principal photography took place in Australia at Village Roadshow Studios on the Gold Coast, Queensland from September 2002 to May 2003.",
            "Peter Pan premiered at the Empire in Leicester Square, London on December 9, 2003, and was theatrically released by Universal Pictures, Columbia Pictures, and Revolution Studios in the United Kingdom on December 24, 2003, and in the United States on December 25, 2003. The film received positive reviews from critics, with praise for the performances (particularly that of Sumpter, Hurd-Wood, and Isaacs), visuals, romantic feel, and Howard's musical score. However, it was a financial failure, grossing $122 million worldwide, against an estimated budget of $130.6 million (not including marketing costs), resulting in a $70–95 million loss."
        ]
    },
    {
        id: OTHERS_MOVIE_ELEVEN_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: theLastAirBenderImage,
        title: "The Last Air Bender",
        releaseDate: "21 February 2005",
        description: [
            "Avatar: The Last Airbender, also known as Avatar: The Legend of Aang in some regions, is an American animated fantasy action television series created by Michael Dante DiMartino and Bryan Konietzko and produced by Nickelodeon Animation Studio.",
            "Avatar is set in a largely Asiatic-inspired world in which some people can telekinetically manipulate one of the four elements—water, earth, fire or air—through practices known as 'bending', inspired by Chinese martial arts. The only individual who can bend all four elements, the 'Avatar', is responsible for maintaining harmony among the world's four nations, and serves as the link between the physical world and the spirit world. The series is centered around the journey of twelve-year-old Aang, the current Avatar and last survivor of his nation, the Air Nomads, along with his friends Katara, Sokka, and Toph, as they strive to end the Fire Nation's war against the other nations and defeat Fire Lord Ozai before he conquers the world. It also follows the story of Zuko—the exiled prince of the Fire Nation, seeking to restore his lost honor by capturing Aang, accompanied by his uncle Iroh—and later, his sister Azula. Avatar is presented in a style that combines anime with American cartoons and relies on the imagery of primarily Chinese culture, with various other influences from different East Asian, Southeast Asian, South Asian, North Asian, and Native American cultures.",
            "Avatar: The Last Airbender was a ratings success and received acclaim from critics for its characters, cultural references, art direction, voice acting, soundtrack, humor, and themes. These include concepts rarely touched on in youth entertainment, including war, genocide, imperialism, totalitarianism, indoctrination and free choice. It won five Annie Awards, a Genesis Award, a Primetime Emmy Award, a Kids' Choice Award, and a Peabody Award. The show is regarded by many critics as one of the greatest animated television series of all time.",
            "Avatar aired on Nickelodeon for three seasons, from February 2005 to July 2008. The extended Avatar franchise includes an ongoing comics series, a prequel novel series, an animated sequel series, and a live-action film, as well as a live-action remake series produced for Netflix. The complete series was released on Blu-ray in June 2018 in honor of the tenth anniversary of its finale and was made available to stream on Netflix in the United States and Canada in May 2020, on Paramount+ in June 2020, and on Amazon Prime Video in January 2021."
        ]
    },
    {
        id: OTHERS_MOVIE_TWELVE_ID,
        category: OTHERS_MOVIE_CATEGORY,
        image: theTigerApprenticeImage,
        title: "The Tiger Apprentice",
        releaseDate: "2 February 2024",
        description: [
            "The Tiger's Apprentice is a 2024 American animated fantasy film based on the 2003 novel The Tiger's Apprentice by Laurence Yep. Produced by Paramount Animation and Jane Startz Productions, it is directed by Raman Hui and co-directed by Paul Watling and Yong Duk Jhun (in their directorial debuts) from a screenplay by David Magee and Christopher Yost. The film stars the voices of Brandon Soo Hoo, Henry Golding, Lucy Liu, Sandra Oh, and Michelle Yeoh.",
            "Cartoon Network originally opted to produce a live-action/CG hybrid television film adaptation of the novel in the late 2000s, but it never came to fruition. Paramount later acquired the rights for an animated film in March 2019, with Carlos Baena attached as director, and Mikros Animation providing animation. Much of the voice cast was revealed between 2020 and 2022, following Golding's casting in July 2020. Hui later replaced Baena as director in January 2022. Steve Jablonsky composed the score.",
            "Originally planned for theatrical release by Paramount Pictures, The Tiger's Apprentice was released on Paramount+ on February 2, 2024 after being delayed several times due to the COVID-19 pandemic. The film received mixed reviews from critics."
        ]
    }
]

export const UNKNOWN_ID = "UNKNOWN"





export const MOVIE_FIRST_BUTTON_TEXT = "Watch"

export const MOVIE_SECOND_BUTTON_TEXT = "Download"





//ErrorPage
export const ERROR_TITLE_TEXT = "Search Error"

export const ERROR_SUBJECT_TEXT = "There was an error during your search or the web page you are searching for doesn't exist."

export const ERROR_BUTTON_TEXT = "Previous Page"