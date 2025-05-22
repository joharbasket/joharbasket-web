"use client";
import { useRef, useState, useEffect } from "react"
import { FcUpload } from "react-icons/fc";
import axios from 'axios'
import { TiDelete } from "react-icons/ti";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    FormControl,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Flex,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Box,
} from '@chakra-ui/react'

import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { CollectionData, Collection, category, subCategory } from "@/app/products/page";

function ProductForm({ sub, onClose }: { sub: string, onClose: () => void }) {
    const toast = useToast()
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null);
    const formRef = useRef<HTMLFormElement>(null)
    const [stock, setStock] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
    const [showNewCategory, setShowNewCategory] = useState(false);
    const [showNewSubCategory, setShowNewSubCategory] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState<string>(sub);

    // Get current collection data
    const currentCollection = CollectionData.find(col => col.name.toLowerCase() === selectedCollection.toLowerCase());

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!file || !selectedCollection || !selectedCategory || !selectedSubcategory) {
            toast({
                title: "Required Fields Missing",
                description: "Please fill all required fields including image, collection, category and subcategory",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setLoading(true);
        
        if (formRef.current) {
            const formData = new FormData(formRef.current);
                        
            formData.set("collection", selectedCollection);
            formData.set("category", selectedCategory);
            formData.set("subCategory", selectedSubcategory);
            formData.set("isFeatured", formData.get("isFeatured") ? "true" : "false");

            try {
                const response = await axios.post("/api/products", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                if (response.data.data) {
                    toast({
                        title: "Success",
                        description: "Product added successfully",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });

                    // Force a hard refresh of the page
                    window.location.reload();
                    onClose();
                } else {
                    throw new Error("Failed to add product");
                }
            } catch (error: any) {
                console.error("Error adding product:", error);
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "Failed to add product",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col px-5">
            <form onSubmit={onSubmit} ref={formRef}>
                <ModalBody>
                    <Flex direction={["column", "row"]} gap={6}>
                        {/* Left Column */}
                        <Box flex="1">
                            <FormControl isRequired mb={4}>
                                <div className="flex flex-col gap-2">
                                    <input 
                                        type="file" 
                                        accept="image/*"
                                        id="file"
                                        hidden
                                        name="file"
                                        onChange={e => {
                                            const files = e?.target?.files;
                                            if (files) {
                                                setFile(files[0])
                                            }
                                        }}
                                    />
                                    <label 
                                        htmlFor="file" 
                                        className="flex bg-yellow-50 rounded-lg px-3 py-2 items-center gap-2 cursor-pointer w-fit"
                                    >
                                        <FcUpload />
                                        Upload Image
                                    </label>

                                    <div className="relative">
                                        {file ? 
                                            <Image src={URL.createObjectURL(file)} height={'auto'} width={250} alt="Product preview" /> : 
                                            <Image src={'/image-placeholder.jpg'} height={'auto'} width={150} alt="Image placeholder" />
                                        }
                                        {file && 
                                            <div 
                                                className="cursor-pointer absolute top-[-1rem] right-[-2rem] text-3xl"
                                                onClick={() => setFile(null)}
                                            >
                                                <TiDelete />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </FormControl>
                        </Box>

                        {/* Right Column */}
                        <Box flex="2">
                            <Flex direction="column" gap={4}>
                                {/* Collection Selection */}
                                <FormControl isRequired>
                                    <label>Collection</label>
                                    <Select
                                        name="collection"
                                        placeholder="Select Collection"
                                        value={selectedCollection}
                                        onChange={(e) => {
                                            setSelectedCollection(e.target.value);
                                            setSelectedCategory("");
                                            setSelectedSubcategory("");
                                        }}
                                    >
                                        {CollectionData.map((col: Collection) => (
                                            <option key={col.name} value={col.name.toLowerCase()}>
                                                {col.name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* Category Selection */}
                                <FormControl isRequired>
                                    <label>Category</label>
                                    <Flex gap={2}>
                                        {!showNewCategory ? (
                                            <Select
                                                name="category"
                                                placeholder="Select Category"
                                                value={selectedCategory}
                                                onChange={(e) => {
                                                    if (e.target.value === "new") {
                                                        setShowNewCategory(true);
                                                    } else {
                                                        setSelectedCategory(e.target.value);
                                                        setSelectedSubcategory("");
                                                    }
                                                }}
                                            >
                                                {currentCollection?.categories.map((cat: category) => (
                                                    <option key={cat.name} value={cat.name}>
                                                        {cat.name}
                                                    </option>
                                                ))}
                                                <option value="new">+ Add New Category</option>
                                            </Select>
                                        ) : (
                                            <InputGroup>
                                                <Input
                                                    name="category"
                                                    placeholder="Enter new category"
                                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={() => setShowNewCategory(false)}
                                                        mr="2rem"
                                                    >
                                                        <AddIcon />
                                                    </Button>
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={() => setShowNewCategory(false)}
                                                    >
                                                        <ChevronDownIcon />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        )}
                                    </Flex>
                                </FormControl>

                                {/* Subcategory Selection */}
                                <FormControl isRequired>
                                    <label>Subcategory</label>
                                    <Flex gap={2}>
                                        {!showNewSubCategory ? (
                                            <Select
                                                name="subCategory"
                                                placeholder="Select Subcategory"
                                                value={selectedSubcategory}
                                                isDisabled={!selectedCategory}
                                                onChange={(e) => {
                                                    if (e.target.value === "new") {
                                                        setShowNewSubCategory(true);
                                                    } else {
                                                        setSelectedSubcategory(e.target.value);
                                                    }
                                                }}
                                            >
                                                {selectedCategory && 
                                                    currentCollection?.categories
                                                        .find(cat => cat.name === selectedCategory)
                                                        ?.subCategories.map((sub: subCategory) => (
                                                            <option key={sub.name} value={sub.name}>
                                                                {sub.name}
                                                            </option>
                                                        ))
                                                }
                                                <option value="new">+ Add New Subcategory</option>
                                            </Select>
                                        ) : (
                                            <InputGroup>
                                                <Input
                                                    name="subCategory"
                                                    placeholder="Enter new subcategory"
                                                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={() => setShowNewSubCategory(false)}
                                                        mr="2rem"
                                                    >
                                                        <AddIcon />
                                                    </Button>
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={() => setShowNewSubCategory(false)}
                                                    >
                                                        <ChevronDownIcon />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        )}
                                    </Flex>
                                </FormControl>

                                {/* Other form fields */}
                                <FormControl isRequired>
                                    <label>Name</label>
                                    <Input
                                        name="name"
                                        placeholder="Product name"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <label>Price</label>
                                    <Input
                                        name="price"
                                        type="number"
                                        placeholder="Enter price"
                                        min={0}
                                    />
                                </FormControl>

                                <FormControl>
                                    <label>Discounted Price</label>
                                    <Input
                                        name="discountedPrice"
                                        type="number"
                                        placeholder="Enter discounted price"
                                        min={0}
                                    />
                                </FormControl>

                                <FormControl>
                                    <label>GST</label>
                                    <Input
                                        name="gst"
                                        type="number"
                                        placeholder="Enter GST percentage"
                                        min={0}
                                        max={100}
                                    />
                                </FormControl>

                                <FormControl>
                                    <label>Size</label>
                                    <Input
                                        name="size"
                                        placeholder="Enter size"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <label>Stock</label>
                                    <div className="relative">
                                        <Input
                                            type="number"
                                            name="inStock"
                                            value={stock}
                                            onChange={e => setStock(parseInt(e.target.value))}
                                            min={0}
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                                            <Button size="sm" onClick={() => setStock(p => p + 1)}>+</Button>
                                            <Button size="sm" onClick={() => setStock(p => Math.max(0, p - 1))}>-</Button>
                                        </div>
                                    </div>
                                </FormControl>

                                <FormControl>
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        placeholder="Enter product description"
                                        className="w-full px-4 py-2 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    />
                                </FormControl>

                                <FormControl>
                                    <div className="flex items-center">
                                        <label className="flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox"
                                                name="isFeatured"
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2">Featured Product</span>
                                        </label>
                                    </div>
                                </FormControl>
                            </Flex>
                        </Box>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button type="submit" colorScheme="blue" mr={3} isLoading={loading}>
                        Add Product
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </form>
        </div>
    );
}

export default function AddProductModal({ 
    isOpen, 
    onClose,
    sub 
}: { 
    isOpen: boolean;
    onClose: () => void;
    sub: string;
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Product</ModalHeader>
                <ModalCloseButton />
                <ProductForm sub={sub} onClose={onClose} />
            </ModalContent>
        </Modal>
    );
}