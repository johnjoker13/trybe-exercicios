cd unix_tests
cat > skills2.txt
cat >> skills2.txt
sort < skills2.txt
sort < skills2.txt | head -n 3 | cat > top_skills.txt
cat top_skills.txt
cat > phrases2.txt
grep -i "br" phrases2.txt | wc -l
grep -{i,v} "br" phrases2.txt | wc -l
cat >> phrases2.txt 
Angola
Paraguay
cat phrases2.txt countries.txt > bunch_of_things.txt
sort bunch_of_things.txt

