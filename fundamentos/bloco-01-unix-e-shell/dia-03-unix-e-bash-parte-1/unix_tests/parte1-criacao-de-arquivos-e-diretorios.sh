mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt trybe2.txt
mkdir backup
mv trybe_backup.txt ../backup
mkdir backup2
mv trybe_backup.txt ../backup2
rmdir backup
mv backup2 backup
pwd, ls
rm -rf backup
clear
cat > skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
head -n 5 skills.txt
tail -n 4 skills.txt
rm *.txt


