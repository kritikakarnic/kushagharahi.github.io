![about this mac](~posts/asrock_z77_extreme4_gtx_970_high_sierra_hackintosh/aboutthismac.png)

# Hardware (that matters)
- Motherboard: [Asrock Z77 Extreme4](https://www.asrock.com/mb/Intel/Z77%20Extreme4/)
- CPU: [Intel i5-3570K](https://ark.intel.com/products/65520) Ivy Bridge -- CPU shouldn't matter since it will be intel with this specific MOBO
- GPU: [Nvidia GTX 970](https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-970)

You need to have mostly the same hardware for this to work. 

# Installation

### Bios update
[Download](https://www.asrock.com/mb/Intel/Z77%20Extreme4/#BIOS) the latest Asrock Z77 Extreme4 bios and flash it (2.90 at the time of this guide)


### macOS bootable USB
- You need access to a computer running macOS and a 10gb+ USB drive
- Download [High Sierra from the app store](https://itunes.apple.com/us/app/macos-high-sierra/id1246284741?mt=12&l=en-us&ls=1)
- Use `Disk Utility` to erase the USB drive and format with `Mac OS Extended (Journaled)` and (if asked) `GUID Partition map` scheme 
- Use the [`tonymacx86` High Sierra Unibeast tool](https://www.tonymacx86.com/resources/unibeast-8-3-2-high-sierra.383/) to flash the installer to the USB
 - Options: UEFI boot mode on Bootloader Configuration, no selection on Graphics Configuration


### Installation
- Boot from the USB 
 - turn on computer, `f11` during inital spalsh screen to select USB drive
- At the Clover boot screen choose `Boot macOS Installer from USB`
- Run through the installation, format your drive with `Mac OS Extended (Journaled)` and GUID Partition map scheme (if asked)

Congrats you should have a semi working installation at this point!


### Resolution fix
My screen at this point had super low resolution. To fix, I disabled `CSM` in bios.


### Ethernet fix
- Download [IONetworkingFamily.kext](https://www.tonymacx86.com/attachments/ionetworkingfamily-kext-zip.136513/) 
-- This is the most reliable source I could find, if the link is dead please contact me and I will rehost it!
- Also download [KextBeast](https://www.tonymacx86.com/resources/kextbeast.32/)
- Place both `KextBeast` and `IONetworkingFamily.kext` on the desktop and follow the KextBeast instructions to install the kext to `/System/Library/Extensions`
- Reboot


### Nvidia Graphics Fix & Audio Fix
- Download [Clover Configurator](https://mackie100projects.altervista.org/download-clover-configurator/) and mount your EFI partition and select your clover plist
 - Mount EFI tab > Mount your EFI partition on your hard disk (Not usb!!)
 - Home screen button > select your `config.plist` in `EFI/CLOVER/`
- Graphics
 - Install the latest nvidia drivers with [nVidia update](https://github.com/Benjamin-Dobell/nvidia-update) and install the latest mac [CUDA drivers](https://www.nvidia.com/object/mac-driver-archive.html)
(At the time of this guide, I used 5.3.0.0)
 - Boot tab > Select nvda_drv=1 (deselect nv_disable=1 if applicable)
- Audio
 - Kexts Installer tab > Select the Lilu and AppleALC (Realtec ALC898 audio fix) kexts and OS Version of 10.13 and press download -- Boot tab > Select nvda_drv=1 (deselect nv_disable=1 if applicable)
- Restart and you should have fully accelerated graphics and audio!

### Bootloader fix - Boot without USB 
At this point, your installation probably doesn't work without the bootable USB. 
- Download and flash a Linux live USB distro to another USB drive, I used [Alt Linux Rescue](https://en.altlinux.org/Rescue)
- Make sure only your macOS hard drive is plugged in for simplicity
- Boot into a linux shell
- Add a bios entry for Clover with `efibootmgr -c -L “Clover UEFI” -l “\EFI\CLOVER\CLOVERX64.EFI”`
- Make it the first bios entry with `efibootmgr -o 0000`
- If you screw this up, no biggie, just do a CMOS reset and try again! You can always fall back to booting from your macOS bootable USB

## Congratulations you should have a mostly working Hackintosh now! 

### To-Do
- Figure out power management and sleep
- Mojave upgrade guide 
 - only thing missing seems to be acceleration in nvidia drivers. So when/if(?) Nvidia releases them then this guide should work, YMMV. Alternatively, you can get a "metal" supported GPU, also YMMV.

