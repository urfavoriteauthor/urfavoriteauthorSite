import React from 'react'
import BookCard from './bookCard'
import Baron from '../assets/images/BARON.JPG'
import Hunted from '../assets/images/thrillhunted.JPG'
import Ghost from '../assets/images/thrillghost.JPG'
import Lovers from '../assets/images/theloversmanual.JPG'
import Levels from '../assets/images/levels.JPG'
import Missing from '../assets/images/missingpiece.JPG'
import Warlok from '../assets/images/warlok.JPG'
import Deadwater from '../assets/images/deadinthewater.JPG'
import Thecards from '../assets/images/thecards.JPG'
import Journee from '../assets/images/journeythetraveler.JPG'
import Journee2 from '../assets/images/journeythetravelerBEYOND.JPG'
import Journee3 from '../assets/images/journee3.JPG'
import Lostfiles from '../assets/images/thrilllost.PNG'
import Timebreakers from '../assets/images/timebreakers.JPG'
import Phantasy from '../assets/images/phantasy.JPG'
import Spellbound from '../assets/images/spellbound.JPG'
import Hubris from '../assets/images/hubris.PNG'
import Bulletproof from '../assets/images/bulletproofheart.jpg'
import Claire from '../assets/images/clairvoyance.jpg'
import Moonbreaker from '../assets/images/moonbreaker.PNG'
import Zombies from '../assets/images/zombiesdontcome.PNG'
import Daughter from '../assets/images/daughterofthelastdays.JPG'
import Deadman from '../assets/images/deadmanwalking.JPG'
import Algorithm from '../assets/images/algorithm.JPG'
import Realm from '../assets/images/realmofthefallen.JPG'

class Cards extends React.Component {
 alertBook=()=>{
alert("Not available")
}

    render() {
        return (
            <div className='cards'>
            
            <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Hunted} title="Thrill of the Hunt:Hunted" description='A boy named Marcus Hunt is taken from the world he has known and thrust into a world full of dangerous assassins. As he grows more skilled, he comes to find out a deadly secret that puts himself and all those he holds dear at risk. Now, if he wants to survive, he must use all of the skills at his disposal, to defeat those who wish him dead'
                        link='https://squareup.com/store/urfavoriteauthor/item/thrill-of-the-hunt'
                        
                        />
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Ghost} title="Thrill of the Hunt:Ghost Contract" description='After barely surviving an attack from The Order, a nefarious group of professional killers, Marcus must fulfill a final contract to take out the most dangerous man in the organization. But does he have what it takes to kill him? Or will this be his last mission?'
                        link='https://squareup.com/store/urfavoriteauthor/item/thrill-of-the-hunt-ghost-contract'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Lostfiles} title="Thrill of the Hunt:The Lost Files" description='*This book will be exclusively available to members of my patreon* These are the hidden files from The Order, the lost records of every assignment that Marcus Hunt has ever been on. Stay connected to the action with this book filled full of nothing but bullet flying, hard fighting, edge of your seat action'
                        link='https://www.patreon.com/Urfavoriteauthor'/>
                        
                    </div>
                    {/* First Row */}
                </div>
                </div>
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Lovers} title="The Lover's Man-ual" description="A strategic guide to effective dating.Don't just learn how to be better in the dating world, but also understand the strategies and tactics that allow you to control the various aspects of your love life."
                        link='https://squareup.com/store/urfavoriteauthor/item/the-lover-s-man-ual-standard'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Levels} title="Levels" description='In this Poetic collection, the author analyzes his life on a grand scale he realizes that there is not one size that fits all. There are varying degrees of this thing called life and only through experience can you make the most out of life.'
                        link='https://squareup.com/store/urfavoriteauthor/item/levels'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Missing} title="The Missing Piece" description='A book of poetry from N.M. Porterfield in which his journey of self discovery leads him to realize that theres only one thing thats missing. The question is how will he find that missing piece?'
                        link='https://squareup.com/store/urfavoriteauthor/item/the-missing-piece-1'/>
                    </div>
                </div>
                </div>
                {/* Second Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Warlok} title='Warlok' description='In a world where Magic meets Technological innovation, a war is brewing, and only the last member of a one of the most well known magical families stands between the citizens of the capital, and total annihilation' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Deadwater} title="Dead in the Water" description='Eight strangers stranded on a boat, with no explanation for how they got there. When a mysterious voice tells them the only way off is to kill the other seven, each one must decide if their life holds more value than the other seven people on board.'
                        link='https://squareup.com/store/urfavoriteauthor/item/dead-in-the-water'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Thecards} title="The Cards We're Dealt" description='As racial tensions continue to grow, a new organization decides to take things into their own hands. Now with revolution on the nations doorsteps, four strangers go on a journey of discovery that will change the scope of the nation forever.' link='/books' />
                    </div>
                </div>
                </div>
                {/* Third Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee} title="Journee the Traveler" description='Journee Jenkins and her brother Donovan find a piece of alien technology that careens them across the universe to a new world. In order to get back to their world, they must take on a galactic tyrant, and navigate the various dimensions, else they risk being lost forever.' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee2} title="Journee the Traveler:Beyond" description='Journee and her brother are still navigating the different dimensions in an attempt to find their way back home. While stopping on an alien world, they become enthralled in an interspecies war that looks to tear the planet apart. Can Journee and her friends save the day, or will they be casualties of an alien war' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Journee3} title="Journee the Traveler:Endgame" description='Time and Space are tearing apart. Journee is displaced from her proper dimension and if she does not return there before its too late, the universe could be destroyed. But there is another traveler just like her who wants to see just that. The end of everything.' link='/books'/>
                    </div>
                </div>
                </div>
                {/* Fourth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Timebreakers} title="Timebreakers" description='A boy is given a watch that allows him to traverse time. A teenager given complete control over time...What could possibly go wrong there? But the more he uses it, the more dangerous it becomes, as a man in a dark cloak has shown up with one mission. To kill him' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Phantasy} title="Phantasy's Edge" description='A man plagued by night terrors finds that what he thought were only dreams, were actually visions of a brand new world full of wonders. But as his dream stretches on, he realizes that he is not just responsible for saving this new world, but his own world as well.' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Spellbound} title="Spellbound in the Endless Night" description='In a world where magic governs the laws of nature, there has always been one who maintains order in the world of Illusia. But when the chosen one must ascend from a pair of lovers who are pit against each other, love must now create something more powerful than any spell ever cast if these two can survive the demands of a centuries old prophecy.' link='/books'/>
                    </div>
                </div>
                </div>
                {/* Fifth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Hubris} title="Hubris" description='He is the most talented developer at his firm. He is smart, attractive, and a hit with women. But his arrogance will take him on a path of discovery. Like Icarus flying too close to the sun, even the brightest star can eventually fall.' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Bulletproof} title="Bulletproof Heart" description='She was hired to kill a corrupt politician. He was hired to protect him. Now their paths must cross, but as conflict arises, so does desire in this hot and racy story about two unexpected lovers who were given one assignment...To Kill One Another.'link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Claire} title="Clairevoyance" description='After a horrific car accident places her in a coma for a few months, Claire awakens to find she has abilities beyond anything she had ever imagined. But are her powers a blessing? Or will they bring on more trouble than she bargained for?' link='/books'/>
                    </div>
                </div>
                </div>
                {/* Sixth Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Realm} title="Realm of the Fallen" description='A heavenly battle that has made its way to earth, a fallen angel by the name of Tazriel, and a girl who has the spiritual sight must find a way to stop the end of the world before its too late.'
                        link='https://squareup.com/store/urfavoriteauthor/item/realm-of-the-falle'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Algorithm} title="Algorithm and Blu-ez" description='When the machines took over, nobody knew exactly what would happen. But a single piece of code, programmed into a construction bot may create an opportunity for humanity to free itself of its mechanical masters. The Only issue is, the two secret weapons to saving humanity are a 7 year old girl, and a dysfunctional robot.' link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Deadman} title="Deadman Walking" description='The number one rule to surviving a zombie apocalypse is to avoid being bitten, no matter what. But once that happens, and you are uncertain as to how many days you have left, do you die a hero, or just become another one of the walking dead?' link='/books'/>
                    </div>
                </div>
                </div>
                {/* Seventh Row */}
                <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Moonbreaker} title="MoonBreaker" description='The werewolves control most of the open land in the country. Because of that, small packs of hunters travel the countryside trying to reclaim the land. On their side are the hybrid werewolves known as Moonbreakers. But when a war breaks out between their species, which side will they take? The Pack? Or the Humans they are supposed to protect?' link='https://www.patreon.com/Urfavoriteauthor'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Zombies} title="Zombies Don't Come to the Hood" description='There are some things that just do NOT happen in black neighborhoods. They dont open starbucks. They dont host policemens balls..and they dont have Zombie outbreaks...at least until now...The entire neighborhood is being overrun by the undead. But a group of fearless teens have decided that these dead men walked into the wrong hood'link='/books'/>
                    </div>
                    <div className='col-md-4'>
                        <BookCard imgsrc={Daughter} title="Daughter of the Last Days" description='The World as we know it has ended. The Zombies are everywhere, but in an attempt to find a cure for the plague that has ravaged the world, something more sinister was born. Or...Someone?' link='/books'/>
                    </div>
                </div>
                </div>
            </div>


        )
    }
}

export default Cards;