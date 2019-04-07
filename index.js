var teams = ["  Trabzonspor  ", "  Antalyaspor  ", "   Sivasspor   ", "  Kayserispor  ",
    "  Alanyaspor   ", "   Bursaspor   ", "  Galatasaray  ", "  Malatyaspor  ", " Kasımpasaspor ",
    "  Erzurumspor  ", "    Göztepe    ", "  Akhisarspor  ", "  Ankaragücü   ", "  Fenerbahçe   ",
    "  Başaksehir   ", "   Konyaspor   ", "   Rizespor    ", "   Beşiktaş    "];

var guc=[1,9,2,8,3,7,4,6,5,5,1,9,2,8,2,4,7,5];
// bu asamada her takıma kuvvet atadım ama ileride hep kuvveti buyuk olan takımın kazanmasını engelledim. Kuvvetinin buyuk olması sadece sansını arttırdı.

var galibiyet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var berabere=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maglubiyet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var averaj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var atilanGol=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var yenilenGol=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var scor=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


console.log("   EV-SAHİBİ  ^^^^^^  DEPLASMAN");
/* Bu asamada birlesme ihtimali olan bütün takimlari bir araya getirmeye calıstım.
    34 hafta var ve her hafta 9 maç oynanması dolayisiyla
    34*9=306 adet eslesme elde ettim.
    Her takim birer rakibiyle hem kendi evinde hem de deplasmanda oynayacak sekilde
    eslesme yapmıs oldu. Olusan liste elde ettigim eslesmelerdir.
 */

for(let firstTeam = 0; firstTeam < teams.length; firstTeam++) {
    for(let secondTeam = firstTeam + 1; secondTeam < teams.length; secondTeam++) {
        console.log(teams[firstTeam], "vs", teams[secondTeam])


        toplamGuc = guc[firstTeam] + guc[secondTeam];
        p1 = guc[firstTeam] / toplamGuc;
        p2 = guc[secondTeam] / toplamGuc;
        /*
               Burada kuvveti fazla olan takimin hep kazanan taraf olmasini engelledim.
               Her calistirdigimda galibiyet ve maglubiyet sayilarinin farkli olması bunu destekliyor.
        */

        if (p1 > Math.random()) {
            galibiyet[firstTeam]++;
            maglubiyet[secondTeam]++;
            gol1=Math.floor(Math.random() * 6);
            gol2=Math.floor(Math.random() * 6);
            /*
            bu asamada kazanan ilk takim. 2 tane random sayi üretiyorum ve büyük sayiyi kazanan takima atilan gol, kaybeden takima yenilen gol olarak ekliyorum.
            Küçük sayıyıda kazanan takima yenilen gol, kaybeden takima atilan gol olarak ekliyorum.
            Bunu diger durumlar icinde tekrarladim.
             */
            if (gol1>gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol2;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol2;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
            }
            else if (gol1<gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol2;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol2;
            }
        }
        else if (p2 > Math.random()) {
            galibiyet[secondTeam]++;
            maglubiyet[firstTeam]++;
            gol1=Math.floor(Math.random() * 6);
            gol2=Math.floor(Math.random() *6);
            if (gol1<gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol2;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol2;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
            }
            else if (gol1>gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol2;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol2;
            }
        }
        else {
            berabere[firstTeam]++;
            berabere[secondTeam]++;
            gol1=Math.floor(Math.random() * 6);
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
            }
        }
    };

for(let firstTeam = 17; firstTeam >=0; firstTeam--) {
    for(let secondTeam =firstTeam - 1; secondTeam >= 0; secondTeam--) {
        console.log(teams[firstTeam], "vs", teams[secondTeam]);

        toplamGuc = guc[firstTeam] + guc[secondTeam];
        p1 = guc[firstTeam] / toplamGuc;
        p2 = guc[secondTeam] / toplamGuc;


        if (p1 > Math.random()) {
            galibiyet[firstTeam]++;
            maglubiyet[secondTeam]++;
            var gol1=Math.floor(Math.random() * 6);
            var gol2=Math.floor(Math.random() * 6);
            if (gol1>gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol2;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol2;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
            }
            else if (gol1<gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol2;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol2;
            }
        }
        else if (p2 > Math.random()) {
            galibiyet[secondTeam]++;
            maglubiyet[firstTeam]++;
            gol1=Math.floor(Math.random() * 6);
            gol2=Math.floor(Math.random() * 6);
            if (gol1<gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol2;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol2;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
            }
            else if (gol1>gol2){
                atilanGol[firstTeam]=atilanGol[firstTeam]+gol2;
                yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
                atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
                yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol2;
            }
        }
        else {
            berabere[firstTeam]++;
            berabere[secondTeam]++;
            gol1=Math.floor(Math.random() * 6);
            atilanGol[firstTeam]=atilanGol[firstTeam]+gol1;
            yenilenGol[firstTeam]=yenilenGol[firstTeam]+gol1;
            atilanGol[secondTeam]=atilanGol[secondTeam]+gol1;
            yenilenGol[secondTeam]=yenilenGol[secondTeam]+gol1;
        }
    }
    };

console.log("###   SON HAFTADAKİ PUAN DURUMU   ###");
for(let i = 0; i < teams.length; i++) {
    console.log( teams[i],"G: ",galibiyet[i], "B:",berabere[i], "M: ", maglubiyet[i],"a: ",atilanGol[i],
        "y: ",yenilenGol[i], "AV: ", averaj[i]=atilanGol[i]-yenilenGol[i],"Puan: ",scor[i]= (galibiyet[i]*3+berabere[i]));
};

console.log("###                   Puana Göre Takımların Başarı Sıralaması                   ###");
/*
Puan basari sirasina göre listeleyebilmek için swap methodunu kullandim.
 */
for(var i=0; i<18; i++)
{
    for(var j=0; j<18; j++)
    {
        if(scor[i]<scor[j])
        {
            tmp=scor[i];
            scor[i]=scor[j];
            scor[j]=tmp;

            tmp=teams[i];
            teams[i]=teams[j];
            teams[j]=tmp;
            tmp=galibiyet[i];
            galibiyet[i]=galibiyet[j];
            galibiyet[j]=tmp;
            tmp=maglubiyet[i];
            maglubiyet[i]=maglubiyet[j];
            maglubiyet[j]=tmp;

            tmp=berabere[i];
            berabere[i]=berabere[j];
            berabere[j]=tmp;

            tmp=atilanGol[i];
            atilanGol[i]=atilanGol[j];
            atilanGol[j]=tmp;

            tmp=yenilenGol[i];
            yenilenGol[i]=yenilenGol[j];
            yenilenGol[j]=tmp;
        }
    }
}
for(var i=17; i>=0; i--){
    console.log(17-i+1, teams[i],"G: ",galibiyet[i], "B:",berabere[i], "M: ", maglubiyet[i],"a: ",atilanGol[i],
        "y: ",yenilenGol[i], "AV: ", averaj[i]=atilanGol[i]-yenilenGol[i],"Puan: ",scor[i]= (galibiyet[i]*3+berabere[i]));
}