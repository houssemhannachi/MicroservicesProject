package com.example.publication.service;

import com.example.publication.dao.FileDBRepository;
import com.example.publication.entities.FileDB;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.*;
import org.springframework.web.multipart.*;

import java.io.*;
import java.util.stream.*;

@Service
public class FileStorageService {
    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
        return fileDBRepository.save(FileDB);
    }

    public FileDB getFile(long id) {
        return fileDBRepository.findById(id).get();
    }

    public Stream<FileDB> getAllFiles() {
        return fileDBRepository.findAll().stream();
    }
}
