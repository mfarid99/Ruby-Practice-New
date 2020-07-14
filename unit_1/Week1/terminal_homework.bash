#Create a new directory on your Desktop called galaxy_far_far_away and enter it via terminal
#moefarid@MacBook-Pro ~ % cd Desktop
#moefarid@MacBook-Pro Desktop % mkdir galaxy_far_far_away
#moefarid@MacBook-Pro Desktop % cd galaxy_far_far_away 
#Create a directory called death_star, and make the following files inside of it:
#darth_vader.txt
#princess_leia.txt
#storm_trooper.txt
#moefarid@MacBook-Pro galaxy_far_far_away % mkdir death_star
#moefarid@MacBook-Pro galaxy_far_far_away % cd death_star 
#moefarid@MacBook-Pro death_star % touch darth_vader.txt #princess_leia.txt storm_trooper.txt
#moefarid@MacBook-Pro death_star % cd ..
#In galaxy_far_far_away, make a directory named tatooine and create the following files in it:
#luke.txt
#ben_kenobi.txt
#moefarid@MacBook-Pro galaxy_far_far_away % mkdir tatooine
#moefarid@MacBook-Pro galaxy_far_far_away % cd tatooine 
#moefarid@MacBook-Pro tatooine % touch ben_kenobi.txt ben_kenobi.txt
#moefarid@MacBook-Pro tatooine % touch luke.txt
#Inside of tatooine make a directory called millenium_falcon, and in it create:
#han_solo.txt
#chewbaca.txt

#moefarid@MacBook-Pro tatooine % mkdir millenium_falcon
#moefarid@MacBook-Pro tatooine % cd millenium_falcon 
#moefarid@MacBook-Pro millenium_falcon % touch han_solo.txt chewbaca.txt
#moefarid@MacBook-Pro millenium_falcon % cd ..
#Rename ben_kenobi.txt to obi_wan.txt.

#moefarid@MacBook-Pro tatooine % mv ben_kenobi.txt obi_wan.txt
#moefarid@MacBook-Pro tatooine % cd ..
#moefarid@MacBook-Pro galaxy_far_far_away % cd death_star 
#Copy storm_trooper.txt from death_star to tatooine

#moefarid@MacBook-Pro death_star % cp storm_trooper.txt ../tatooine 
#moefarid@MacBook-Pro death_star % cd ..
#moefarid@MacBook-Pro galaxy_far_far_away % cd Tatooine
#Move luke.txt and obi_wan.txt to the millenium_falcon
 
#moefarid@MacBook-Pro tatooine % mv luke.txt obi_wan.txt #millenium_falcon 
#Move millenium_falcon out of tatooine and into galaxy_far_far_away

#moefarid@MacBook-Pro tatooine % mv millenium_falcon ..
#moefarid@MacBook-Pro tatooine % cd ..
#Move millenium_falcon into death_star

#moefarid@MacBook-Pro galaxy_far_far_away % mv millenium_falcon death_star 
#moefarid@MacBook-Pro galaxy_far_far_away % cd death_star
#Move princess_leia.txt into the millenium_falcon
 
#moefarid@MacBook-Pro death_star % mv princess_leia.txt #millenium_falcon 
#moefarid@MacBook-Pro death_star % ls
darth_vader.txt		millenium_falcon	storm_trooper.txt
#moefarid@MacBook-Pro death_star % cd millenium_falcon
#Delete obi_wan.txt 
#moefarid@MacBook-Pro millenium_falcon % rm obi_wan.txt 
#moefarid@MacBook-Pro millenium_falcon % cd ..
#moefarid@MacBook-Pro death_star % cd ..
#In galaxy_far_far_away, make a directory called yavin_4

#moefarid@MacBook-Pro galaxy_far_far_away % mkdir yavin_4
#moefarid@MacBook-Pro galaxy_far_far_away % ls            
#death_star	tatooine	yavin_4
#moefarid@MacBook-Pro galaxy_far_far_away % cd death_star 
#moefarid@MacBook-Pro death_star % ls
darth_vader.txt		millenium_falcon	storm_trooper.txt
#Move the millenium_falcon out of the death_star and into yavin_4

#moefarid@MacBook-Pro death_star % mv millenium_falcon ../yavin_4 
#moefarid@MacBook-Pro death_star % cd ..
#moefarid@MacBook-Pro galaxy_far_far_away % ls
death_star	tatooine	yavin_4
#moefarid@MacBook-Pro galaxy_far_far_away % cd yavin_4
#Make a directory in yavin_4 called x_wing
 
#moefarid@MacBook-Pro yavin_4 % mkdir x_wing
#moefarid@MacBook-Pro yavin_4 % cd ..
#moefarid@MacBook-Pro galaxy_far_far_away % ls
death_star	tatooine	yavin_4
#moefarid@MacBook-Pro galaxy_far_far_away % cd yavin_4 
#moefarid@MacBook-Pro yavin_4 % ls
millenium_falcon	x_wing
#moefarid@MacBook-Pro yavin_4 % cd millenium_falcon 
#moefarid@MacBook-Pro millenium_falcon % ls
chewbaca.txt		luke.txt
han_solo.txt		princess_leia.txt
#Move princess_leia.txt to yavin_4 and luke.txt to x_wing

#moefarid@MacBook-Pro millenium_falcon % mv princess_leia.txt ..
#moefarid@MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt	luke.txt
#moefarid@MacBook-Pro millenium_falcon % mv luke.txt ../x_wing 
#moefarid@MacBook-Pro millenium_falcon % cd ..
#moefarid@MacBook-Pro yavin_4 % ls
millenium_falcon	princess_leia.txt	x_wing
#Move the millenium_falcon and x_wing out of yavin_4 and into galaxy_far_far_away

#moefarid@MacBook-Pro yavin_4 % mv millenium_falcon x_wing ..
#moefarid@MacBook-Pro yavin_4 % .. cd
#zsh: permission denied: ..
#moefarid@MacBook-Pro yavin_4 % cd ..
#moefarid@MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		yavin_4
millenium_falcon	x_wing
#moefarid@MacBook-Pro galaxy_far_far_away % cd death_star 
#in death_star, create directories for tie_fighter_1, tie_fighter_2 and tie_fighter_3

#moefarid@MacBook-Pro death_star % mkdir tie_fighter_1  tie_fighter_2  tie_fighter_3   
#Move darth_vader.txt into tie_fighter_1

#moefarid@MacBook-Pro death_star % mv darth_vader.txt tie_fighter_1 
#moefarid@MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2 tie_fighter_3
cp: tie_fighter_2 is a directory (not copied).
#moefarid@MacBook-Pro death_star % cd storm_trooper.txt tie_fighter_2
cd: string not in pwd: storm_trooper.txt
#Make a copy of storm_trooper.txt in both tie_fighter_2 and tie_fighter_3

#moefarid@MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2
#moefarid@MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_3
#Move all of the tie_fighters out of the death_star and into galaxy_far_far_away

#moefarid@MacBook-Pro death_star % mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ..
#moefarid@MacBook-Pro death_star % cd ..
#Remove tie_fighters 2 and 3

#moefarid@MacBook-Pro galaxy_far_far_away % rm -r tie_fighter_2 tie_fighter_3
#moefarid@MacBook-Pro galaxy_far_far_away % cd x_wing 
#Touch a file in x_wing called the_force.txt

#moefarid@MacBook-Pro x_wing % touch the_force.txt
#moefarid@MacBook-Pro x_wing % cd ..
#Destroy the death_star and anyone inside of it.

#moefarid@MacBook-Pro galaxy_far_far_away % rm -r death_star 
#Return x_wing and the millenium_falcon to yavin_4

#moefarid@MacBook-Pro galaxy_far_far_away % mv x_wing millenium_falcon yavin_4 
#moefarid@MacBook-Pro galaxy_far_far_away % 


