type Origin = u32;
type Location = u32;
type Asset = u32;

pub struct Runtime {
    xcm: PalletXcm,
}

pub struct PalletXcm {}

impl PalletXcm {
    pub fn send(origin: Origin, dest: Location, message: Vec<u8>) {}

    pub fn teleport_assets(
        origin: Origin,
        dest: Location,
        beneficiary: Location,
        assets: Asset,
        message: Vec<u8>,
    ) {
    }
}

pub struct XcmExecutor {}

fn main() {
    println!("Hello, world!");
}
