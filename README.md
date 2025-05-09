Pixel Pets
==
## 4th Quarter Project Update Plan
## PARAGRAPH:<br>
Our project is titled Pixel Pets. It is a website that allows users to experience the company of a virtual pet. This includes aspects such as monitoring their pet’s health or playing games with them. Additionally, a pet is unique—no animal is the same, and we have learned to incorporate this into our game by adding a customizable feature.  

As of now, our website remains in the developmental phase. There is still significant room for improvement, as well as room for potential in terms of the usability and its overall layout. To be more specific, of the five web pages we have—Home, Sudoku, Customize, Sleep, and About—only one of them is entirely complete, and that is the About page. However, the main webpage that lacks the majority of the promised final output is the Customize webpage, as the others only require the addition of certain elements such as data collection and saving from the user.  

The data that will be collected from the user and saved onto the website as mentioned previously, includes: the account of the user (to login), the information about the pet (e.g. name), the outfit and accessories given to the pet (saved in the Customize webpage, to be transferred to all web pages where the saved pet will be seen). All of these, when added, will be beneficial to our website as it will allow the user to save the unique pet they made creating  a more personalized and engaging experience. This persistent data will enable users to return to their virtual pet and continue their interaction from where they left off.   

As stated previously, the main webpage that we plan to make the majority of the updates on is the Customize webpage as it has yet to gain a functional and complete interface. We plan to add the different accessories, and their respective categories (similar to the layout of gacha life/club). This is also where most of the data that is stored will be collected, with the information and accessories being changed in this webpage, it will be updated then stored into the JSON file, and transferred to the other webpages where the pet is needed.   

Additionally, we plan to update the Home, Sudoku, and Sleep webpages to incorporate the transfer of information from the Customize webpage. The homepage displays the pets, and allows the user to give the pet a name, and toggle with other personal information of their pet. The Sudoku page invites the user to play an educational game with their pet, hence your pet would sit next to you while you play the game. Lastly, the Sleep page allows the user to switch between their pets, for which one they would like to put to sleep. All three of these web pages require the use of the data saved in the Customize page to be able to display the pet or use the pet in the said webages.


## DATA:  

Type of data: Pet information  
Purpose: for saving and loading if pets used previously  

	Pets {
		slotOne: {name: text-string, species: text-string},
		slotTwo: {name: text-string, species: text-string},
		slotThree: {name: text-string, species: text-string}
    }

Type of data: Accessories  
Purpose: for loading the pets with their outfits

	Clothes {
		headDress:  text-string,
		neckWear:  text-string,
		outfit:  text-string
    }

Type of data: Login data  
Purpose: for logging into the website

	Account {
		username: text-string,
		name:  text-string,
		password:  text-string
    }

## WIREFRAME CRUD:  
![](https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/ppetsWire.png?v=1742995844984)
![](https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/d8491a6e-2a82-4a7f-9b56-9932023a24e5.jpg?v=1742995856808)
![](https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/Screenshot%202025-03-26%20213350.png?v=1742996053581)


_______________________________________________________________________________________
## Description:
Pixel Pets is a website where you can design and care for your very own virtual pet. You can dress them, play with them, and even create your own room for them! Your pet keeps you entertained while doing requirements or surfing the web. If you can't have a real pet, try Pixel Pets!
## Outline of the website:

     Homepage:
Menu bar <br>
- Located on the left for quick access to each webpage (each webpage will include the menu bar on the left) 

Pixel Pet Display <br>
- Maximum 5 slots 
- You can select a pet you previously made and it will display on screen with the background room you customized 
- Name of the pet you select will appear on the top (you edit it from there) 

      Webpage 1: Customize Your Pixel Pet! 
Customizable parts:
- Preset: Cat, Dog, Bunny
- Clothes
- Hat
- Accessories
- Shoes
- Color (sub tab for each accessory and color options)

      Webpage 2: Pixel Rooms
Template rooms: <br>
- Plain color background where they choose the color through a palette 
- You can add furniture to customize the room (couch, tv, piano, table, etc.)

    Webpage 3: Games
Ideas: <br>
- Whack A Mole
- Jumping game/runner game. (Like Chrome dinosaur)
- Tic-tac-toe 
<br><br>Eductional Games:
- Sudoku
- Math game
- History game

	    Webpage 4: Care
In this portion, you can take care of your pets by: <br>
- Petting them 
- Feeding them 
- Giving them a bath 


## Incorporation of JavaScript:
The homepage will use Javascript in several ways: <br>
- It will help by saving the avatars/outfits of the user. Since the user can design outfits for 3 different pets, Javascript can help with saving each of those outfits. <br>
- It will aid in switching between web pages by coordinating with the HTML file. This would allow the user to click a certain button and immediately change the webpage that they are accessing. (This is mainly shown with the Menu Bar) <br>
- The homepage’s main aspect is the display of the characters the user has created. <br>
  - When the user selects a pet they want to show in their display, JS is needed to switch between the images of the pets (from the one currently displayed to the one selected) <br>
  - As mentioned previously in the outline, we will give the user the opportunity to customize rooms for each pet. This means that while the pet is on display, the background would also change along with the pet. <br>
- At the bottom right of the page, there is a symbol that looks like an “eye”. This symbolizes hiding elements—if you want to view your pet with its room and take a picture or just simply admire it on its own, the button will take out the elements surrounding it (Menu table, title, display, character slots, etc.) <br>

## Wireframes:
Homepage:
![](https://cdn.glitch.global/d777d55d-ff3e-48f8-a6c9-ddea7a318c43/Pixel%20Pets%20Home.jpg?v=1730819079312)
Subpage: Customization 
![](https://cdn.glitch.global/d777d55d-ff3e-48f8-a6c9-ddea7a318c43/Pixel%20Pets%20Subpage.jpg?v=1730819087129)
