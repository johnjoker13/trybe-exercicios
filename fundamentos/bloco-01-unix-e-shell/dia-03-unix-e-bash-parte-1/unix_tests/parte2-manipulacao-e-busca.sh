
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat countries.txt
grep "Zambia" countries.txt
grep "Brazil" countries.txt
grep -i "brazil" countries.txt
cat > phrases.txt
Everybody hurts
foxy lady
Foxes are mammals
with or without you
grep -{v,i} "fox" phrases.txt
wc -w phrases.txt
wc -l phrases.txt
touch empty.tbt empty.pdf
ls
find *.txt
find *.txt *.tbt
man ls
