// Pegando elementos HTML
var charnome = document.getElementById('charnome')
var charimg = document.getElementById('charimg')
var charmask = document.getElementById('charmask')
var chartxt = document.getElementsByClassName('contxt')[0]
var chartxt2 = document.getElementsByClassName('contxt')[1]
var charnick = document.getElementsByClassName('cont')[0]
var charidade = document.getElementsByClassName('cont')[1]
var charalt = document.getElementsByClassName('cont')[2]
var charwp = document.getElementsByClassName('cont')[3]
var arcana = document.getElementsByClassName('cont')[4]
var chares = document.getElementById('char')

// Funções e eventos.

function clicar(psg){
    window.scroll(0,2100) // Move a tela 2100 pixels para baixo assim que clicar no botão.
    if (psg == 'joker'){
        charnome.innerHTML = 'Protagonista'
        charnick.innerHTML = 'Joker, Ren, Trickster'
        charidade.innerHTML='17-18 (P5S)'
        charalt.innerHTML = '1,75 cm'
        charwp.innerHTML = 'Facas e Pistolas'
        arcana.innerHTML = 'Fool'
        chartxt.innerHTML = 'O protagonista de Persona 5 é um estudante transferido da Shujin Academy. No início do jogo, ele tem pouco ou nenhum poder ou influência no mundo e é restringido pelas regras do sistema em que nasceu. No entanto, sob seu comportamento tranquilo está um Wild Card de grande força de vontade liderando os Phantom Thieves e capaz de explorar o Metaverse para afetar a realidade.'
        chartxt2.innerHTML = 'Para seus companheiros de equipe, seu codinome é Joker, e para os moradores da Velvet Room ele é conhecido como o Trickster. O protagonista é o líder dos rebeldes Phantom Thieves of Hearts, um grupo que visa mudar a sociedade tocando o coração das pessoas e realizando assaltos ilegais.'
        charimg.src = './alt phantomT/joker.png'
        charmask.src = './imgMasks/jokermask.png'
    }else if (psg == 'ryuji'){
        charnome.innerHTML = 'Ryuji Sakamoto'
        charnick.innerHTML = 'Skull, Skeleton, Blondie'
        charidade.innerHTML='18 (P5S)'
        charalt.innerHTML = '1,70 cm'
        charwp.innerHTML = 'Porretes e Espingardas'
        arcana.innerHTML = 'Chariot'
        chartxt.innerHTML = '<br>Ryuji Sakamoto, também conhecido como Skull, é um dos personagens principais e membros do grupo no videogame Persona 5. Ele é um estudante do segundo ano na Shujin Academy, onde é visto como um delinquente devido ao seu cabelo colorido e natureza agressiva, é um dos membros fundadores dos Phantom Thieves of Hearts. Anteriormente, ele era a estrela da equipe de atletismo, antes de ter sua perna quebrada por Suguru Kamoshida depois que ele foi provocado a bater nele, o que resultou na dissolução da equipe.</br>'
        chartxt2.innerHTML = ''
        charimg.src = './alt phantomT/ryuji.png'
        charmask.src = './imgMasks/ryujimask.png'
    }else if (psg == 'ann'){
        charnome.innerHTML = 'Ann Takamaki'
        charnick.innerHTML = 'Panther, Lady Ann.'
        charidade.innerHTML='17 (P5S)'
        charalt.innerHTML = '1,65 cm'
        charwp.innerHTML = 'Laços e Submetralhadoras'
        arcana.innerHTML = 'Lovers'
        chartxt.innerHTML = '<br>Ann Takamaki, também conhecida como Panther, é uma das personagens principais e membros do grupo no videogame Persona 5. Ann é uma adolescente americana que viveu grande parte de sua vida no exterior; um estudante do segundo ano na Shujin Academy; e um dos membros fundadores dos Phantom Thieves of Hearts. Ela se junta ao grupo para se vingar de Suguru Kamoshida pelo abuso sexual de sua amiga Shiho Suzui, que a levou a tentar o suicídio.</br>'
        chartxt2.innerHTML = ''
        charimg.src = './alt phantomT/ann.png'
        charmask.src = './imgMasks/annmask.png'
    }else if (psg == 'mona'){
        charnome.innerHTML = 'Morgana'
        charnick.innerHTML = 'Mona, Black cat, Tanuki.'
        charidade.innerHTML='N/A'
        charalt.innerHTML = 'Bípede: 60 cm, Gato: 50 cm'
        charwp.innerHTML = 'Espadas curvas e Estilingues'
        arcana.innerHTML = 'Magician'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Morgana é um tritagonista e um dos membros do grupo no videogame Persona 5. Ele é uma misteriosa criatura parecida com um gato que acredita fortemente ter sido humano e um dos membros fundadores dos Phantom Thieves of Hearts. Ele também é o navegador inicial do grupo até que Futaba Sakura se junte.</br>'
        charimg.src = './alt phantomT/morgana.png'
        charmask.src = './imgMasks/monaf.png'
    }else if(psg == 'yusuke'){
        charnome.innerHTML = 'Yusuke Kitagawa'
        charnick.innerHTML = 'Fox, Inari.'
        charidade.innerHTML='17 (P5S)'
        charalt.innerHTML = '1,81 cm'
        charwp.innerHTML = 'Espadas Japonesas e Rifles'
        arcana.innerHTML = 'Emperor'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Yusuke Kitagawa, também conhecido como Fox, é um dos personagens principais e membros do grupo no videogame Persona 5. Ele é um estudante de arte da Kosei High School e membro dos Phantom Thieves of Hearts. Apresentado como aluno do famoso pintor Ichiryusai Madarame, Yusuke se junta aos Ladrões depois que a verdade por trás do sucesso de seu mentor vem à tona. Sabendo disso há algum tempo, Yusuke deseja expiar por não enfrentar a realidade mais cedo.</br>'
        charimg.src = './alt phantomT/yusuke.png'
        charmask.src = './imgMasks/yusukemask.png'
    }else if (psg == 'makoto'){
        charnome.innerHTML = 'Makoto Nijima'
        charnick.innerHTML = 'Queen, Ms. President, Ms. Cavaleira pós apocalíptica'
        charidade.innerHTML='19 (P5S)'
        charalt.innerHTML = '1,64 cm'
        charwp.innerHTML = 'Tekko e Revólveres'
        arcana.innerHTML = 'Priestess'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Makoto Niijima, também conhecido como Queen, é um dos personagens principais e membros do grupo nos videogames Persona 5 e Persona 5: Royal. Ela é uma estudante do terceiro ano da Shujin Academy, a Presidente do Conselho Estudantil e a irmã mais nova de Sae Niijima. Inicialmente aparecendo como um inimigo dos Phantom Thieves of Hearts, Makoto se junta a eles para derrubar o chefe da máfia Junya Kaneshiro e, finalmente, fica com eles como estrategista do grupo.</br>'
        charimg.src = './alt phantomT/makoto.png'
        charmask.src = './imgMasks/makotomask.png'
    }else if (psg == 'haru'){
        charnome.innerHTML = 'Haru Okumura'
        charnick.innerHTML = 'Noir, Beauty Thief'
        charidade.innerHTML='18 (P5S)'
        charalt.innerHTML = '1,58 cm'
        charwp.innerHTML = 'Machados e Lança Granadas'
        arcana.innerHTML = 'Empress'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Haru Okumura, também conhecida como Noir, é uma das personagens principais e membros do grupo no videogame Persona 5. Ela é uma estudante do terceiro ano da Shujin Academy e a única filha de Kunikazu Okumura, o quinto alvo principal dos Phantom Thieves. de Corações. Ela inicialmente se junta ao grupo para mudar o coração corrupto de seu pai, embora logo seja revelado que seu maior desejo é sair de seu casamento arranjado com seu namorado abusivo.</br>'
        charimg.src = './alt phantomT/haru.png'
        charmask.src = './imgMasks/harumask.png'
    }else if (psg == 'futaba'){
        charnome.innerHTML = 'Futaba Sakura'
        charnick.innerHTML = 'Oracle, Navi'
        charidade.innerHTML='16 (P5S)'
        charalt.innerHTML = '1,52 cm'
        charwp.innerHTML = 'N/A'
        arcana.innerHTML = 'Hermit'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Futaba Sakura é uma das personagens principais do videogame Persona 5. Ela é uma hikikomori (o termo japonês para fechado). Ela também é filha adotiva de Sojiro Sakura e filha biológica de Wakaba Isshiki. Ela inicialmente aborda os Phantom Thieves of Hearts para fazê-los roubar seu coração distorcido, o que a levou a manifestar um palácio. Depois que seu coração é roubado, ela se junta aos Ladrões como sua nova Navegadora, a fim de descobrir a verdade por trás da morte de sua mãe. Sua Persona inicial é Necronomicon e sua Persona Final é Prometheus.</br>'
        charimg.src = './alt phantomT/futaba.png'
        charmask.src = './imgMasks/futabamask.png'
    }else if (psg == 'akechi'){
        charnome.innerHTML = 'Goro Akechi'
        charnick.innerHTML = 'Crow, Detective Prince'
        charidade.innerHTML='17-18 (P5R)'
        charalt.innerHTML = '1,78 cm'
        charwp.innerHTML = 'Sabres e Pistolas a Laser'
        arcana.innerHTML = 'Justice'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Goro Akechi é um deuteragonista e um dos membros do grupo no videogame Persona 5. Ele é um estudante do terceiro ano que frequenta uma escola desconhecida. Ele também é um detetive de celebridades que está investigando os Phantom Thieves of Hearts, eventualmente se unindo a eles. No entanto, ele é na verdade uma toupeira trabalhando para Masayoshi Shido, a quem ele planeja se vingar por arruinar sua vida.</br>'
        charimg.src = './alt phantomT/akechi.png'
        charmask.src = './imgMasks/akechimask.png'
    }else if (psg == 'kasumi'){
        charnome.innerHTML = 'Sumire Yoshizawa'
        charnick.innerHTML = 'Violet, Kasumi'
        charidade.innerHTML='15 (P5R)'
        charalt.innerHTML = '1,62 cm'
        charwp.innerHTML = 'Rapieiras e Rifles Antigos'
        arcana.innerHTML = 'Faith'
        chartxt.innerHTML = ''
        chartxt2.innerHTML = '<br>Sumire "Kasumi" Yoshizawa é uma tritagonista e personagem jogável em Persona 5 Royal. Yoshizawa é um membro dos Phantom Thieves of Hearts sob o nome Violet, e uma estudante de transferência do primeiro ano do ensino médio na Shujin Academy e recebeu uma bolsa de ginástica. Yoshizawa foi encontrada pela primeira vez em um trem cedendo seu assento para uma mulher idosa, mas mais tarde foi tomada por outro homem. A primeira interação de Yoshizawa com Ren Ayamiya aconteceu em 30 de maio em uma viagem escolar para limpar um parque e mais tarde forjar um confidente com ela.</br>'
        charimg.src = './alt phantomT/kasumi.png'
        charmask.src = './imgMasks/kasumimask.png'
    }else{
        window.alert('Erro! Tente Novamente.')
    }

}