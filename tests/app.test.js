import { ChessGame } from "../chess_app";

describe('ChessGame', () => {
    let chessGame;

    beforeEach(() => {
        document.body.innerHTML = `
        <body class="m-0 p-0 overflow-hidden">
    <section class="chessboard_wrapper">
        <div id="chessboard" class="mx-auto  max-w-4xl justify-center py-5 px-2 items-center">
            <div class="board-numbering">

            <div class="row_8">
                
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">8</span>
                    <div id="a8" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="b8" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="c8" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="d8" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="e8" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="f8" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="g8" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="h8" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                </section>
            </div>
            
            <div class="row_7">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">7</span>
                    <div id="a7" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="b7" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="c7" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="d7" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="e7" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="f7" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="g7" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="h7" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                </section>
            </div>
            <div class="row_6">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">6</span>
                    <div id="a6" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="b6" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="c6" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="d6" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="e6" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="f6" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="g6" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="h6" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                </section>
            </div>
            <div class="row_5">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">5</span>
                    <div id="a5" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="b5" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="c5" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="d5" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="e5" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="f5" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="g5" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="h5" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                </section>
            </div>
            <div class="row_4">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">4</span>
                    <div id="a4" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="b4" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="c4" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="d4" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="e4" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="f4" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="g4" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="h4" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                </section>
            </div>
            <div class="row_3">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">3</span>
                    <div id="a3" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="b3" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="c3" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="d3" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="e3" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="f3" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="g3" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="h3" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                </section>

            </div>
            <div class="row_2">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">2</span>
                    <div id="a2" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="b2" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="c2" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="d2" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="e2" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="f2" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="g2" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="h2" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                </section>
            </div>
            <div class="row_1">
                <section class="piece_board font-semibold grid grid-cols-9 max-w-4xl">
                    <span class="row_number flex justify-center items-center">1</span>
                    <div id="a1" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="b1" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="c1" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                        
                    </div>
                    <div id="d1" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
                        
                    </div>
                    <div id="e1" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
              
                    </div>
                    <div id="f1" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
           
                    </div>
                    <div id="g1" class="chess-square border-2 border-black bg-orange-800 w-full h-28">
                     
                    </div>
                    <div id="h1" class="chess-square border-2 border-black bg-orange-200 w-full h-28">
             
                    </div>
                </section>
                <aside class="grid font-semibold grid-cols-9">
                    <span></span>
                    <span class="column-letter flex justify-center">a</span>
                    <span class="column-letter flex justify-center">b</span>
                    <span class="column-letter flex justify-center">c</span>
                    <span class="column-letter flex justify-center">d</span>
                    <span class="column-letter flex justify-center">e</span>
                    <span class="column-letter flex justify-center">f</span>
                    <span class="column-letter flex justify-center">g</span>
                    <span class="column-letter flex justify-center">h</span>
                    
                </aside>
                

            </div>

        </div>
    </section>

<script type="module" src="chess_pieces.js"></script>
<script type="module" src="chess_app.js"></script>

</body>
        `

        chessGame = new ChessGame()
        chessGame.initialize()
    })

    test('OnSquareClick should select a piece', () => {
        const mockClickEvent = {currentTarget: document.getElementById('e2')}
        chessGame.onSquareClick(mockClickEvent);

        expect(chessGame.selectedPiece).toBeDefined()
    })
})
