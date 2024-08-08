import { Box, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface IFramerMotion {
  images: string[];
}

const FramerMotion = ({ images }: IFramerMotion) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Box position="relative" height="400px" width="100%">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </AnimatePresence>
      {images?.length > 1 && 
      <IconButton
        aria-label="Previous Image"
        icon={<ArrowBackIcon />}
        onClick={prevImage}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      />
    }
    {images?.length > 1 && 
      <IconButton
        aria-label="Next Image"
        icon={<ArrowForwardIcon />}
        onClick={nextImage}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
      />
     }
    </Box>
  );
};

export default FramerMotion;
