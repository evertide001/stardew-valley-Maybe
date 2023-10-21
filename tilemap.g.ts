// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000d01010101010101010101010101010a0101010101010101010101010101010a0505050505050504010101010101010a0707070707070603010101010101010a0808080808080203010101010101010a0809090108080203010101010101010a0801010808080203010101010101010a0801010109080203010101010101010a0c08090809080203010101010101010a0c08090908080203010101010101010a0c01010101010101010101010101010a0c01010101010101010101010101010a0c01010101010101010101010101010a0c01010101010101010101010101010a0c01010101010101010101010101010a0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles9,sprites.builtin.forestTiles14,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
